import { Hono } from 'hono';
import { handle } from 'hono/nextjs';
class HonoRuntime extends Hono {
    serve(options) {
        return handle(this, options?.nextjs?.path ?? '/api');
    }
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
export * from 'hono/nextjs';
