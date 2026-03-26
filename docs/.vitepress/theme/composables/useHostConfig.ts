import { ref, watch } from 'vue'

const HOST_STORAGE_KEY = 'unifi-access-host'
const APIKEY_STORAGE_KEY = 'unifi-access-apikey'
const DEFAULT_HOST = ''
const DEFAULT_APIKEY = ''

// vitepress-openapi localStorage keys (prefix: --oa)
const OA_CUSTOM_SERVER_URL = '--oa-custom-server-url'
const OA_USE_CUSTOM_SERVER = '--oa-use-custom-server'
const OA_AUTH_BEARER = '--oa-authorization-bearerAuth'

// Cookie name for dev proxy
const PROXY_COOKIE = 'unifi-access-host'

const host = ref(DEFAULT_HOST)
const apiKey = ref(DEFAULT_APIKEY)

const isDev = typeof location !== 'undefined' && (
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
)

/**
 * Normalize user input to a full base URL: https://host:12445
 * Accepts: "192.168.0.96", "https://192.168.0.96", "https://192.168.0.96:12445", etc.
 */
function normalizeHost(input: string): string {
  let val = input.trim()
  if (!val) return ''

  // Remove trailing slash
  val = val.replace(/\/+$/, '')

  // Add protocol if missing
  if (!/^https?:\/\//.test(val)) {
    val = `https://${val}`
  }

  try {
    const url = new URL(val)
    const port = url.port || '12445'
    return `${url.protocol}//${url.hostname}:${port}`
  } catch {
    return val
  }
}

/**
 * Sync host to vitepress-openapi custom server URL.
 * In dev mode: point to current origin (requests go through Vite proxy).
 * In prod mode: point directly to the user's host.
 */
function syncOAServer(hostUrl: string) {
  if (hostUrl) {
    const oaServer = isDev ? location.origin : hostUrl
    localStorage.setItem(OA_CUSTOM_SERVER_URL, oaServer)
    localStorage.setItem(OA_USE_CUSTOM_SERVER, 'true')

    // Set cookie for dev proxy middleware to read target host
    if (isDev) {
      document.cookie = `${PROXY_COOKIE}=${encodeURIComponent(hostUrl)}; path=/; SameSite=Lax`
    }
  } else {
    localStorage.removeItem(OA_CUSTOM_SERVER_URL)
    localStorage.setItem(OA_USE_CUSTOM_SERVER, 'false')

    if (isDev) {
      document.cookie = `${PROXY_COOKIE}=; path=/; max-age=0`
    }
  }
}

let initialized = false

export function useHostConfig() {
  if (!initialized && typeof localStorage !== 'undefined') {
    const savedHost = localStorage.getItem(HOST_STORAGE_KEY)
    if (savedHost) {
      host.value = savedHost
      syncOAServer(savedHost)
    }

    const savedKey = localStorage.getItem(APIKEY_STORAGE_KEY)
    if (savedKey) {
      apiKey.value = savedKey
      localStorage.setItem(OA_AUTH_BEARER, savedKey)
    }

    initialized = true

    watch(host, (val) => {
      if (val) {
        localStorage.setItem(HOST_STORAGE_KEY, val)
      } else {
        localStorage.removeItem(HOST_STORAGE_KEY)
      }
      syncOAServer(val)
    })

    watch(apiKey, (val) => {
      if (val) {
        localStorage.setItem(APIKEY_STORAGE_KEY, val)
        localStorage.setItem(OA_AUTH_BEARER, val)
      } else {
        localStorage.removeItem(APIKEY_STORAGE_KEY)
        localStorage.removeItem(OA_AUTH_BEARER)
      }
    })
  }

  function resetHost() {
    host.value = DEFAULT_HOST
  }

  function resetApiKey() {
    apiKey.value = DEFAULT_APIKEY
  }

  return { host, apiKey, normalizeHost, DEFAULT_HOST, DEFAULT_APIKEY, resetHost, resetApiKey }
}
