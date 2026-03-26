import { ref, watch } from 'vue'

const HOST_STORAGE_KEY = 'unifi-access-host'
const APIKEY_STORAGE_KEY = 'unifi-access-apikey'
const DEFAULT_HOST = ''
const DEFAULT_APIKEY = ''

// Cookie name for dev proxy middleware
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

function syncProxyCookie(hostUrl: string) {
  if (!isDev) return
  if (hostUrl) {
    document.cookie = `${PROXY_COOKIE}=${encodeURIComponent(hostUrl)}; path=/; SameSite=Lax`
  } else {
    document.cookie = `${PROXY_COOKIE}=; path=/; max-age=0`
  }
}

let initialized = false

export function useHostConfig() {
  if (!initialized && typeof localStorage !== 'undefined') {
    const savedHost = localStorage.getItem(HOST_STORAGE_KEY)
    if (savedHost) {
      host.value = savedHost
      syncProxyCookie(savedHost)
    }

    const savedKey = localStorage.getItem(APIKEY_STORAGE_KEY)
    if (savedKey) {
      apiKey.value = savedKey
    }

    initialized = true

    watch(host, (val) => {
      if (val) {
        localStorage.setItem(HOST_STORAGE_KEY, val)
      } else {
        localStorage.removeItem(HOST_STORAGE_KEY)
      }
      syncProxyCookie(val)
    })

    watch(apiKey, (val) => {
      if (val) {
        localStorage.setItem(APIKEY_STORAGE_KEY, val)
      } else {
        localStorage.removeItem(APIKEY_STORAGE_KEY)
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
