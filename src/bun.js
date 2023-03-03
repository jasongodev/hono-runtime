import { Hono } from 'hono'

Hono.prototype.serve = function (options = {}) {
  return {
    port: options?.bun?.port || 3000,
    fetch: this.fetch
  }
}

export * from 'hono'
export * from 'hono/bun'
export * from './common'
