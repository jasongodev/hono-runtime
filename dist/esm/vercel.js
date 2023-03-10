import { Hono } from 'hono';
class HonoRuntime extends Hono {
    serve(options) {
        return async (req, res) => {
            const app = new Hono().route(options?.vercel?.path ?? '/api', this);
            return await app.fetch(req);
        };
    }
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
