/* eslint-disable import/export */
import { Hono, Env } from 'hono'
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common'

class HonoRuntime<E extends Env, S = {}, BasePath extends string = ''> extends Hono<E, S, BasePath> {
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
