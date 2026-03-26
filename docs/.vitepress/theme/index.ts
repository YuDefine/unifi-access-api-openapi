import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { theme, useOpenapi } from 'vitepress-openapi/client'
import 'vitepress-openapi/dist/style.css'
import './style.css'

import spec from '../../../public/openapi.json' with { type: 'json' }

import Layout from './Layout.vue'
import HostConfig from './components/HostConfig.vue'
import AttendanceDemo from './components/AttendanceDemo.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    useOpenapi({
      spec,
      config: {
        server: {
          allowCustomServer: true,
        },
      },
    })
    theme.enhanceApp({ app, router, siteData })

    app.component('HostConfig', HostConfig)
app.component('AttendanceDemo', AttendanceDemo)
  },
} satisfies Theme
