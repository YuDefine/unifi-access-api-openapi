<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HostReplacer from './components/HostReplacer.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout />
  <HostReplacer />
</template>
