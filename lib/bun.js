import { Hono } from 'hono';
class HonoRuntime extends Hono {
    serve(options) {
        return {
            port: options?.bun?.port ?? 3000,
            fetch: this.fetch
        };
    }
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
export * from 'hono/bun';
