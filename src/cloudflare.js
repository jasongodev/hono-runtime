import { Hono } from 'hono'

Hono.prototype.serve = function (options = {}) {
  return this
}

export * from 'hono'
export * from 'hono/cloudflare-workers'
export * from './common'
