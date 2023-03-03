import { Hono } from 'hono'

Hono.prototype.serve = function () {
  return {
    port: 3000,
    fetch: this.fetch
  }
}

export * from 'hono'
export * from 'hono/bun'
export * from './middlewares'
