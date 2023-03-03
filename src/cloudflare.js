import { Hono } from 'hono'

Hono.prototype.serve = function () {
  return this
}

export * from 'hono'
export * from 'hono/cloudflare-workers'
export * from './middlewares'
