import { ref, watch } from 'vue'

const HOST_STORAGE_KEY = 'unifi-access-host'
const APIKEY_STORAGE_KEY = 'unifi-access-apikey'
const DEFAULT_HOST = 'https://{host}:12445'
const DEFAULT_APIKEY = ''

const host = ref(DEFAULT_HOST)
const apiKey = ref(DEFAULT_APIKEY)

let initialized = false

export function useHostConfig() {
  if (!initialized && typeof localStorage !== 'undefined') {
    const savedHost = localStorage.getItem(HOST_STORAGE_KEY)
    if (savedHost) host.value = savedHost

    const savedKey = localStorage.getItem(APIKEY_STORAGE_KEY)
    if (savedKey) apiKey.value = savedKey

    initialized = true

    watch(host, (val) => {
      if (val && val !== DEFAULT_HOST) {
        localStorage.setItem(HOST_STORAGE_KEY, val)
      } else {
        localStorage.removeItem(HOST_STORAGE_KEY)
      }
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

  return { host, apiKey, DEFAULT_HOST, DEFAULT_APIKEY, resetHost, resetApiKey }
}
