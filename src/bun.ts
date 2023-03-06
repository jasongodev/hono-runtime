/* eslint-disable import/export */
import { Hono } from 'hono'
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common'

class HonoRuntime extends Hono {
  serve (options?: HonoRuntimeOptions): HonoRuntimeServe {
    return {
      port: options?.bun?.port ?? 3000,
      fetch: this.fetch
    }
  }
}

export { HonoRuntime as Hono }
export * from 'hono'
export * from './common'
export * from 'hono/bun'
