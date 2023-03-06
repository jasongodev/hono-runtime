/* eslint-disable import/export */
import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import type { HonoRuntimeOptions, HonoRuntimeServe } from './../common.ts'

class HonoRuntime extends Hono {
  serve (options?: HonoRuntimeOptions): HonoRuntimeServe {
    serve(this.fetch, options?.deno ?? {})
    return this
  }
}

export { HonoRuntime as Hono }
export * from 'https://deno.land/x/hono/mod.ts'
export * from 'https://deno.land/x/hono/middleware.ts'
