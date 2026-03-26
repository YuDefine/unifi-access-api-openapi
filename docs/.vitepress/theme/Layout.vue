<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HostReplacer from './components/HostReplacer.vue'
import { installDevProxy } from './composables/useDevProxy'

installDevProxy()

const { Layout } = DefaultTheme
</script>

<template>
  <Layout />
  <HostReplacer />
</template>
