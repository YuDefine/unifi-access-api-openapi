import { ref, watch } from 'vue'

const HOST_STORAGE_KEY = 'unifi-access-host'
const APIKEY_STORAGE_KEY = 'unifi-access-apikey'
const DEFAULT_HOST = ''
const DEFAULT_APIKEY = ''

// vitepress-openapi localStorage keys (prefix: --oa)
const OA_CUSTOM_SERVER_URL = '--oa-custom-server-url'
const OA_USE_CUSTOM_SERVER = '--oa-use-custom-server'
const OA_AUTH_BEARER = '--oa-authorization-bearerAuth'

const host = ref(DEFAULT_HOST)
const apiKey = ref(DEFAULT_APIKEY)

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

let initialized = false

export function useHostConfig() {
  if (!initialized && typeof localStorage !== 'undefined') {
    const savedHost = localStorage.getItem(HOST_STORAGE_KEY)
    if (savedHost) {
      host.value = savedHost
      // Sync saved host to vitepress-openapi on init
      localStorage.setItem(OA_CUSTOM_SERVER_URL, savedHost)
      localStorage.setItem(OA_USE_CUSTOM_SERVER, 'true')
    }

    const savedKey = localStorage.getItem(APIKEY_STORAGE_KEY)
    if (savedKey) {
      apiKey.value = savedKey
      // Sync saved API key to vitepress-openapi on init
      localStorage.setItem(OA_AUTH_BEARER, savedKey)
    }

    initialized = true

    watch(host, (val) => {
      if (val) {
        localStorage.setItem(HOST_STORAGE_KEY, val)
        // Sync to vitepress-openapi: set custom server URL
        localStorage.setItem(OA_CUSTOM_SERVER_URL, val)
        localStorage.setItem(OA_USE_CUSTOM_SERVER, 'true')
      } else {
        localStorage.removeItem(HOST_STORAGE_KEY)
        localStorage.removeItem(OA_CUSTOM_SERVER_URL)
        localStorage.setItem(OA_USE_CUSTOM_SERVER, 'false')
      }
    })

    watch(apiKey, (val) => {
      if (val) {
        localStorage.setItem(APIKEY_STORAGE_KEY, val)
        // Sync to vitepress-openapi: set bearer auth token
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
