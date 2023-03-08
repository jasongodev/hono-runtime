import { Hono, Env } from 'hono';
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common';
declare class HonoRuntime<E extends Env, S = {}, BasePath extends string = ''> extends Hono<E, S, BasePath> {
    serve(options?: HonoRuntimeOptions): HonoRuntimeServe;
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
export * from 'hono/cloudflare-workers';
