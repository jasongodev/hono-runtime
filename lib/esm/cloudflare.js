import { Hono } from 'hono';
class HonoRuntime extends Hono {
    serve(options) {
        return this;
    }
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
export * from 'hono/cloudflare-workers';
