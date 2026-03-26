import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'
import spec from '../../public/openapi.json' with { type: 'json' }
import { devProxyPlugin } from './devProxyPlugin'

const openApiSidebar = useSidebar({ spec })
const apiQuickSearchSidebarEn = openApiSidebar.itemsByPaths({
  startsWith: '',
  collapsible: true,
  depth: 6,
  linkPrefix: '/operations/',
})

const apiQuickSearchSidebarZhTW = openApiSidebar.itemsByPaths({
  startsWith: '',
  collapsible: true,
  depth: 6,
  linkPrefix: '/zh-TW/operations/',
})

const detailSidebarEn = [
  {
    text: 'Guides',
    items: [
      { text: 'Overview', link: '/api/overview' },
      { text: 'Introduction', link: '/api/introduction' },
      { text: 'Usage Guide', link: '/USAGE' },
      { text: 'Changelog', link: '/api/changelog' },
    ],
  },
  {
    text: 'Detailed Docs',
    items: [
      { text: 'User', link: '/api/user' },
      { text: 'Visitor', link: '/api/visitor' },
      { text: 'Access Policy', link: '/api/access-policy' },
      { text: 'Credential', link: '/api/credential' },
      { text: 'Space', link: '/api/space' },
      { text: 'Device', link: '/api/device' },
      { text: 'System Log', link: '/api/system-log' },
      { text: 'UniFi Identity', link: '/api/unifi-identity' },
      { text: 'Notification', link: '/api/notification' },
      { text: 'API Server', link: '/api/api-server' },
    ],
  },
]

const detailSidebarZhTW = [
  {
    text: '導覽',
    items: [
      { text: '總覽', link: '/zh-TW/api/overview' },
      { text: '簡介', link: '/zh-TW/api/introduction' },
      { text: '使用指南', link: '/zh-TW/USAGE' },
      { text: '更新紀錄', link: '/zh-TW/api/changelog' },
    ],
  },
  {
    text: '詳細文檔',
    items: [
      { text: '使用者', link: '/zh-TW/api/user' },
      { text: '訪客', link: '/zh-TW/api/visitor' },
      { text: '存取政策', link: '/zh-TW/api/access-policy' },
      { text: '憑證', link: '/zh-TW/api/credential' },
      { text: '空間', link: '/zh-TW/api/space' },
      { text: '裝置', link: '/zh-TW/api/device' },
      { text: '系統紀錄', link: '/zh-TW/api/system-log' },
      { text: 'UniFi Identity', link: '/zh-TW/api/unifi-identity' },
      { text: '通知', link: '/zh-TW/api/notification' },
      { text: 'API 伺服器', link: '/zh-TW/api/api-server' },
    ],
  },
]

export default defineConfig({
  title: 'UniFi Access API Docs',
  description: 'UniFi Access API 非官方說明文件',
  base: '/',

  vite: {
    plugins: [devProxyPlugin()],
  },

  head: [
    [
      'script',
      {},
      `(function() {
        if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;
        var key = 'vitepress-locale-redirected';
        if (sessionStorage.getItem(key)) return;
        sessionStorage.setItem(key, '1');
        var lang = navigator.language || navigator.userLanguage || '';
        if (/^zh\\b/i.test(lang)) {
          window.location.replace('/zh-TW/');
        }
      })();`,
    ],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Detailed Docs', link: '/api/introduction' },
          { text: 'API Quick Search', link: '/operations/' },
          { text: 'Usage', link: '/USAGE' },
        ],
        sidebar: [
          ...detailSidebarEn,
          ...apiQuickSearchSidebarEn,
        ],
      },
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'UniFi Access API Docs',
      description: 'UniFi Access API 非官方說明文件',
      themeConfig: {
        nav: [
          { text: '詳細文檔', link: '/zh-TW/api/introduction' },
          { text: 'API 快速查找', link: '/zh-TW/operations/' },
          { text: '使用指南', link: '/zh-TW/USAGE' },
        ],
        sidebar: [
          ...detailSidebarZhTW,
          ...apiQuickSearchSidebarZhTW,
        ],
        outline: {
          label: '本頁目錄',
        },
      },
    },
  },

  themeConfig: {
    outline: {
      level: 2,
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YuDefine/unifi-access-api-openapi' },
    ],
  },
})
