import { Hono } from 'hono'
export * from 'hono'
export * from 'hono/cloudflare-workers'
export { basicAuth } from 'hono/basic-auth'
export { bearerAuth } from 'hono/bearer-auth'
export { cache } from 'hono/cache'
export { compress } from 'hono/compress'
export { cors } from 'hono/cors'
export { etag } from 'hono/etag'
export { html, raw } from 'hono/html'
export { Fragment, JSXNode, jsx, memo } from 'hono/jsx'
export { jwt } from 'hono/jwt'
export { logger } from 'hono/logger'
export { poweredBy } from 'hono/powered-by'
export { prettyJSON } from 'hono/pretty-json'

Hono.prototype.serve = function () {
  return this
};

Object.assign(global, { __STATIC_CONTENT_MANIFEST: JSON.stringify({}) })
