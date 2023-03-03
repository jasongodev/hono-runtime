import { Hono } from 'hono'
import { handle } from 'hono/nextjs'

Hono.prototype.serve = function (options = {}) {
  return handle(this, options?.vercel?.path || '/api')
}

export const config = {
  runtime: 'edge'
}
export * from 'hono'
export * from 'hono/nextjs'
export * from './common'
