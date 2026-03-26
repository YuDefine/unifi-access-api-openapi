import { ref, watch } from 'vue'

const HOST_STORAGE_KEY = 'unifi-access-host'
const APIKEY_STORAGE_KEY = 'unifi-access-apikey'
const DEFAULT_HOST = ''
const DEFAULT_APIKEY = ''

// Cookie name for dev proxy middleware
const PROXY_COOKIE = 'unifi-access-host'

// vitepress-openapi localStorage keys (must match its storage prefix + key pattern)
const OA_CUSTOM_SERVER_KEY = '--oa-custom-server-url'
const OA_AUTH_KEY = '--oa-authorization-bearerAuth'

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

/**
 * Write to a localStorage key and dispatch a StorageEvent so VueUse's useStorage picks it up.
 */
function syncStorage(key: string, value: string | null) {
  if (typeof localStorage === 'undefined') return
  const oldValue = localStorage.getItem(key)
  if (value) {
    localStorage.setItem(key, value)
  } else {
    localStorage.removeItem(key)
  }
  // Dispatch StorageEvent for same-tab reactivity (VueUse's useStorage listens for this)
  window.dispatchEvent(new StorageEvent('storage', {
    key,
    oldValue,
    newValue: value,
    storageArea: localStorage,
  }))
}

/**
 * Sync host/apiKey to vitepress-openapi's localStorage keys so the playground UI picks them up.
 */
function syncToOpenApi(hostVal: string, apiKeyVal: string) {
  syncStorage(OA_CUSTOM_SERVER_KEY, hostVal || null)
  syncStorage(OA_AUTH_KEY, apiKeyVal || null)
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

    // Pre-populate vitepress-openapi's keys on init
    syncToOpenApi(host.value, apiKey.value)

    initialized = true

    watch(host, (val) => {
      if (val) {
        localStorage.setItem(HOST_STORAGE_KEY, val)
      } else {
        localStorage.removeItem(HOST_STORAGE_KEY)
      }
      syncProxyCookie(val)
      syncToOpenApi(val, apiKey.value)
    })

    watch(apiKey, (val) => {
      if (val) {
        localStorage.setItem(APIKEY_STORAGE_KEY, val)
      } else {
        localStorage.removeItem(APIKEY_STORAGE_KEY)
      }
      syncToOpenApi(host.value, val)
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
