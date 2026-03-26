import type { Plugin } from 'vite'
import { request as httpsRequest } from 'node:https'
import { request as httpRequest, IncomingMessage, ServerResponse } from 'node:http'

const COOKIE_NAME = 'unifi-access-host'
const PROXY_TIMEOUT = 15000

function parseCookies(header?: string): Record<string, string> {
  const cookies: Record<string, string> = {}
  if (!header) return cookies
  for (const part of header.split(';')) {
    const [key, ...rest] = part.split('=')
    cookies[key.trim()] = decodeURIComponent(rest.join('=').trim())
  }
  return cookies
}

function proxy(target: string, req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url || '/', target)
  const isHttps = url.protocol === 'https:'
  const doRequest = isHttps ? httpsRequest : httpRequest

  const opts: any = {
    hostname: url.hostname,
    port: url.port || (isHttps ? 443 : 80),
    path: url.pathname + url.search,
    method: req.method,
    headers: {
      ...req.headers,
      host: url.host,
    },
    timeout: PROXY_TIMEOUT,
  }

  if (isHttps) {
    opts.rejectUnauthorized = false
  }

  const proxyReq = doRequest(opts, (proxyRes) => {
    const headers: Record<string, string | string[]> = {}
    for (const [key, val] of Object.entries(proxyRes.headers)) {
      if (val !== undefined) headers[key] = val
    }
    headers['access-control-allow-origin'] = '*'
    headers['access-control-allow-methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    headers['access-control-allow-headers'] = 'Content-Type, Authorization'

    res.writeHead(proxyRes.statusCode || 502, headers)
    proxyRes.pipe(res)
  })

  proxyReq.on('timeout', () => {
    proxyReq.destroy()
    if (!res.headersSent) {
      res.writeHead(504, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ code: 'PROXY_TIMEOUT', msg: `Connection to ${url.host} timed out` }))
    }
  })

  proxyReq.on('error', (err) => {
    if (!res.headersSent) {
      res.writeHead(502, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ code: 'PROXY_ERROR', msg: err.message }))
    }
  })

  req.pipe(proxyReq)
}

export function devProxyPlugin(): Plugin {
  return {
    name: 'unifi-dev-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/')) return next()

        // Handle CORS preflight
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
          res.setHeader('Access-Control-Max-Age', '86400')
          res.writeHead(204)
          res.end()
          return
        }

        const cookies = parseCookies(req.headers.cookie)
        const target = cookies[COOKIE_NAME]

        if (!target) return next()

        proxy(target, req, res)
      })
    },
  }
}
