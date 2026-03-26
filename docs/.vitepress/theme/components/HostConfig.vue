<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useHostConfig } from '../composables/useHostConfig'

const { host, apiKey, normalizeHost, resetHost, resetApiKey } = useHostConfig()
const { lang } = useData()

const isZhTW = computed(() => lang.value === 'zh-TW')

const i18n = computed(() => isZhTW.value ? {
  title: '設定您的環境（選填）',
  desc: '輸入您的 UniFi Access 主機位址與 API Key，讓程式碼範例可以直接複製使用。',
  hint: '所有數值僅儲存於您瀏覽器的 localStorage 中，會自動替換本站所有程式碼範例中的 {host} 和 Bearer ...。',
  privacyTitle: '隱私說明',
  privacy: '此為選填的便利功能，僅供測試使用。所有數值僅儲存於您瀏覽器的 localStorage 中，不會進行任何資料傳輸或伺服器端保存。若您有疑慮，可至 GitHub fork 本專案後在本機使用，或自行複製範例程式碼到本機執行測試。',
  forkText: 'GitHub fork 本專案',
} : {
  title: 'Configure Your Environment (Optional)',
  desc: 'Enter your UniFi Access host and API key below so that code examples are ready to copy & paste.',
  hint: 'Values are saved in your browser and will replace {host} and Bearer ... in all code examples across this site.',
  privacyTitle: 'Privacy Notice',
  privacy: 'This is an optional convenience feature for testing purposes only. All values are stored exclusively in your browser\'s localStorage — no data is transmitted to any server. If you have concerns, you can fork this project on GitHub and run it locally, or simply copy the example code and replace the placeholders yourself.',
  forkText: 'fork this project on GitHub',
})

function onHostBlur() {
  if (host.value) {
    host.value = normalizeHost(host.value)
  }
}
</script>

<template>
  <div class="host-config-section">
    <h2 class="host-config-title">{{ i18n.title }}</h2>
    <p class="host-config-desc">{{ i18n.desc }}</p>

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
      <p class="host-config-hint">{{ i18n.hint }}</p>
    </div>

    <div class="custom-block info">
      <p class="custom-block-title">{{ i18n.privacyTitle }}</p>
      <p>
        {{ i18n.privacy.split(i18n.forkText)[0] }}<a href="https://github.com/YuDefine/unifi-access-api-openapi" target="_blank">{{ i18n.forkText }}</a>{{ i18n.privacy.split(i18n.forkText)[1] }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.host-config-section {
  margin: 16px 0;
}

.host-config-title {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.host-config-desc {
  color: var(--vp-c-text-2);
  font-size: 14px;
  margin-bottom: 12px;
}

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
</style>
