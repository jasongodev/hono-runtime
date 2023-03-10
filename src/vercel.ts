/* eslint-disable import/export */
import { Hono } from 'hono'
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common'

class HonoRuntime extends Hono {
  serve (options?: HonoRuntimeOptions): HonoRuntimeServe {
    return async (req: Request, res: Response) => {
      const app = new Hono().route(options?.vercel?.path ?? '/api', this)
      return await app.fetch(req)
    }
  }
}

export { HonoRuntime as Hono }
export * from 'hono'
export * from './common'
