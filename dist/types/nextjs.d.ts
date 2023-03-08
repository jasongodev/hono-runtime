import { Hono } from 'hono';
import type { HonoRuntimeOptions, HonoRuntimeServe } from './common';
declare class HonoRuntime extends Hono {
    serve(options?: HonoRuntimeOptions): HonoRuntimeServe;
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
export * from 'hono/nextjs';
