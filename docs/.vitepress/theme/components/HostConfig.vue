<script setup lang="ts">
import { useHostConfig } from '../composables/useHostConfig'

const { host, apiKey, normalizeHost, resetHost, resetApiKey } = useHostConfig()

function onHostBlur() {
  if (host.value) {
    host.value = normalizeHost(host.value)
  }
}
</script>

<template>
  <div class="host-config">
    <div class="host-config-row">
      <div class="host-config-field">
        <label class="host-config-label">Host</label>
        <div class="host-config-input-row">
          <input
            v-model="host"
            class="host-config-input"
            type="text"
            placeholder="https://192.168.0.1:12445"
            spellcheck="false"
            @blur="onHostBlur"
          />
          <button
            v-if="host"
            class="host-config-reset"
            title="Reset"
            @click="resetHost"
          >&times;</button>
        </div>
      </div>
      <div class="host-config-field">
        <label class="host-config-label">API Key</label>
        <div class="host-config-input-row">
          <input
            v-model="apiKey"
            class="host-config-input"
            type="password"
            placeholder="Bearer token"
            spellcheck="false"
            autocomplete="off"
          />
          <button
            v-if="apiKey"
            class="host-config-reset"
            title="Reset"
            @click="resetApiKey"
          >&times;</button>
        </div>
      </div>
    </div>
    <p class="host-config-hint">
      Values are saved in your browser and will replace <code>{host}</code> and <code>Bearer ...</code> in all code examples across this site.
    </p>
  </div>
</template>

<style scoped>
.host-config {
  padding: 16px 20px;
  margin: 16px 0;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.host-config-row {
  display: flex;
  gap: 16px;
}

@media (max-width: 640px) {
  .host-config-row {
    flex-direction: column;
  }
}

.host-config-field {
  flex: 1;
}

.host-config-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
}

.host-config-input-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.host-config-input {
  flex: 1;
  font-size: 13px;
  font-family: var(--vp-font-family-mono);
  padding: 6px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.2s;
}

.host-config-input:focus {
  border-color: var(--vp-c-brand-1);
}

.host-config-input::placeholder {
  color: var(--vp-c-text-3);
}

.host-config-reset {
  font-size: 16px;
  line-height: 1;
  padding: 4px 8px;
  border: none;
  background: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  border-radius: 4px;
}

.host-config-reset:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.host-config-hint {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin: 10px 0 0;
  line-height: 1.5;
}

.host-config-hint code {
  font-size: 11px;
  background: var(--vp-c-bg);
  padding: 1px 4px;
  border-radius: 3px;
}
</style>
