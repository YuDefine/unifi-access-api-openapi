/**
 * In dev mode, intercept fetch calls targeting the UniFi Access API
 * and rewrite them to go through the local Vite proxy instead.
 * This bypasses self-signed cert and CORS issues.
 */

const HOST_STORAGE_KEY = 'unifi-access-host'
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

    if (url) {
      const savedHost = localStorage.getItem(HOST_STORAGE_KEY)
      if (savedHost && url.startsWith(savedHost)) {
        // Rewrite: https://192.168.x.x:12445/api/... → /api/...
        const localPath = url.slice(savedHost.length)
        const localUrl = `${location.origin}${localPath}`

        // Ensure the proxy cookie is set
        document.cookie = `${COOKIE_NAME}=${encodeURIComponent(savedHost)}; path=/; SameSite=Lax`

        // Rebuild the request with the local URL
        if (typeof input === 'string') {
          return originalFetch.call(window, localUrl, init)
        } else if (input instanceof URL) {
          return originalFetch.call(window, new URL(localUrl), init)
        } else if (input instanceof Request) {
          const newReq = new Request(localUrl, input)
          return originalFetch.call(window, newReq, init)
        }
      }
    }

    return originalFetch.call(window, input, init)
  }
}
