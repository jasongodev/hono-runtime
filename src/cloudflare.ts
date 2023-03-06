/* eslint-disable import/export */
import { Hono } from 'hono'
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common'

class HonoRuntime extends Hono {
  serve (options?: HonoRuntimeOptions): HonoRuntimeServe {
    return this
  }
}

export { HonoRuntime as Hono }
export * from 'hono'
export * from './common'
export * from 'hono/cloudflare-workers'
