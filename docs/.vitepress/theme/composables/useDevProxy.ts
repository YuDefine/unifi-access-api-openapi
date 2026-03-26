/**
 * In dev mode, intercept cross-origin fetch calls to /api/ paths
 * and rewrite them to go through the local Vite proxy instead.
 * This bypasses self-signed cert and CORS issues.
 */

const HOST_STORAGE_KEY = 'unifi-access-host'
const APIKEY_STORAGE_KEY = 'unifi-access-apikey'
const COOKIE_NAME = 'unifi-access-host'

let installed = false

export function installDevProxy() {
  if (installed) return
  if (typeof window === 'undefined') return
  if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return

  installed = true

  const originalFetch = window.fetch

  window.fetch = function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const url = typeof input === 'string' ? input
      : input instanceof URL ? input.href
      : input instanceof Request ? input.url
      : null

    if (!url) return originalFetch.call(window, input, init)

    // Check if this is a cross-origin request with /api/ in the path
    let parsed: URL | null = null
    try {
      parsed = new URL(url)
    } catch {
      return originalFetch.call(window, input, init)
    }

    const isCrossOrigin = parsed.origin !== location.origin
    const isApiCall = parsed.pathname.startsWith('/api/')

    if (isCrossOrigin && isApiCall) {
      // Use the target from the fetch URL itself (e.g. https://192.168.1.1:12445)
      const targetOrigin = parsed.origin
      // Also check if user has a configured host — prefer that for the proxy cookie
      const savedHost = localStorage.getItem(HOST_STORAGE_KEY) || targetOrigin

      // Set cookie so proxy middleware knows where to forward
      document.cookie = `${COOKIE_NAME}=${encodeURIComponent(savedHost)}; path=/; SameSite=Lax`

      // Rewrite to local: https://192.168.x.x:12445/api/... → http://localhost:5173/api/...
      const localUrl = `${location.origin}${parsed.pathname}${parsed.search}`

      // Build init from existing Request or init object
      const mergedInit: RequestInit = {
        ...(input instanceof Request ? {
          method: input.method,
          headers: Object.fromEntries(input.headers.entries()),
          body: input.body,
          signal: input.signal,
        } : {}),
        ...init,
      }

      // Inject Authorization header from stored API key
      const apiKey = localStorage.getItem(APIKEY_STORAGE_KEY)
      if (apiKey) {
        const h = new Headers(mergedInit.headers)
        h.set('Authorization', `Bearer ${apiKey}`)
        mergedInit.headers = h
      }

      return originalFetch.call(window, localUrl, mergedInit)
    }

    return originalFetch.call(window, input, init)
  }
}
