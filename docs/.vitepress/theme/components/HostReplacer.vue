<script setup lang="ts">
import { watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { useHostConfig } from '../composables/useHostConfig'

const { host, apiKey, DEFAULT_HOST } = useHostConfig()
const route = useRoute()

const HOST_PATTERNS = [
  /\{\{?[Hh]ost\}?\}/g,
]

// Match various Bearer token patterns found in the docs
const BEARER_PATTERN = /Bearer\s+[\w*/+=.\-/]+/g

function replaceInCodeBlocks() {
  const codeBlocks = document.querySelectorAll('.vp-doc pre code, .vp-doc code')
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

    // Replace host
    if (host.value && host.value !== DEFAULT_HOST) {
      for (const pattern of HOST_PATTERNS) {
        text = text.replace(new RegExp(pattern.source, pattern.flags), host.value)
      }
    }

    // Replace API key
    if (apiKey.value) {
      text = text.replace(BEARER_PATTERN, `Bearer ${apiKey.value}`)
    }

    if (node.textContent !== text) {
      node.textContent = text
    }
  }
}

onMounted(() => {
  nextTick(replaceInCodeBlocks)
})

watch([host, apiKey], () => {
  nextTick(replaceInCodeBlocks)
})

watch(() => route.path, () => {
  nextTick(() => {
    setTimeout(replaceInCodeBlocks, 100)
  })
})
</script>

<template>
  <span />
</template>
