<script setup lang="ts">
import { watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { useHostConfig } from '../composables/useHostConfig'

const { host, apiKey } = useHostConfig()
const route = useRoute()

// Match full server URL template from OpenAPI spec: https://{host}:12445
const FULL_SERVER_URL_PATTERN = /https:\/\/\{\{?[Hh]ost\}?\}:12445/g

// Match standalone {host} or {{host}} (used in markdown docs as full base URL)
const HOST_PLACEHOLDER_PATTERN = /\{\{?[Hh]ost\}?\}/g

// Match hardcoded example IPs with port (e.g., https://192.168.1.1:12445)
const HARDCODED_HOST_PATTERN = /https:\/\/192\.168\.\d+\.\d+:12445/g

// Match various Bearer/Token patterns found in docs and vitepress-openapi rendered code
// Covers: "Bearer wHFmHR*****kD6wHg", "Bearer <token>", "Token" (standalone from vitepress-openapi)
const BEARER_PATTERN = /Bearer\s+[\w*/+=.\-/<>]+/g
const AUTH_TOKEN_PATTERN = /Authorization:\s*Token\b/g

let observer: MutationObserver | null = null
let debounceTimer: ReturnType<typeof setTimeout> | null = null

function replaceInCodeBlocks() {
  const codeBlocks = document.querySelectorAll('.vp-doc pre code, .vp-doc code, .OACodeBlock pre code, .OACodeBlock code, .shiki code')
  codeBlocks.forEach((block) => {
    const el = block as HTMLElement
    replaceTextNodes(el)
  })
}

function replaceTextNodes(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)

  for (const node of nodes) {
    // Store original per text node
    if (!(node as any).__original) {
      (node as any).__original = node.textContent || ''
    }

    let text = (node as any).__original as string

    // Replace host patterns
    if (host.value) {
      // 1. Replace full OpenAPI server URL template "https://{host}:12445" → user's full URL
      text = text.replace(FULL_SERVER_URL_PATTERN, host.value)

      // 2. Replace hardcoded example IPs "https://192.168.x.x:12445" → user's full URL
      text = text.replace(HARDCODED_HOST_PATTERN, host.value)

      // 3. Replace standalone {host} placeholder → user's full URL
      //    (used in markdown docs where {host} represents the full base URL)
      text = text.replace(HOST_PLACEHOLDER_PATTERN, host.value)
    }

    // Replace API key
    if (apiKey.value) {
      text = text.replace(BEARER_PATTERN, `Bearer ${apiKey.value}`)
      text = text.replace(AUTH_TOKEN_PATTERN, `Authorization: Bearer ${apiKey.value}`)
    }

    if (node.textContent !== text) {
      node.textContent = text
    }
  }
}

function debouncedReplace() {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(replaceInCodeBlocks, 50)
}

function startObserver() {
  if (observer) observer.disconnect()

  const target = document.querySelector('#app') || document.body
  observer = new MutationObserver((mutations) => {
    // Only react to additions of code blocks or OA components
    const relevant = mutations.some((m) =>
      m.type === 'childList' && m.addedNodes.length > 0
    )
    if (relevant) debouncedReplace()
  })

  observer.observe(target, { childList: true, subtree: true })
}

onMounted(() => {
  nextTick(() => {
    replaceInCodeBlocks()
    startObserver()
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (debounceTimer) clearTimeout(debounceTimer)
})

watch([host, apiKey], () => {
  nextTick(replaceInCodeBlocks)
})

watch(() => route.path, () => {
  nextTick(replaceInCodeBlocks)
})
</script>

<template>
  <span />
</template>
