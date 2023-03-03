import { Hono } from 'hono'
import { handle } from 'hono/nextjs'

Hono.prototype.serve = function () {
  return handle(this, '/api')
}

export const config = {
  runtime: 'edge'
}
export * from 'hono'
export * from 'hono/nextjs'
export * from './middlewares'
