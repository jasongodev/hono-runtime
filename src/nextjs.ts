/* eslint-disable import/export */
import { Hono } from 'hono'
import { handle } from 'hono/nextjs'
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common'

class HonoRuntime extends Hono {
  serve (options?: HonoRuntimeOptions): HonoRuntimeServe {
    return handle(this, options?.vercel?.path ?? '/api')
  }
}

export const config = {
  runtime: 'edge'
}
export { HonoRuntime as Hono }
export * from 'hono'
export * from './common'
export * from 'hono/nextjs'
