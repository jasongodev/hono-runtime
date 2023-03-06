import { Hono } from 'hono';
class HonoRuntime extends Hono {
    serve(options) {
        this.fire();
        return this;
    }
}
export { HonoRuntime as Hono };
export * from 'hono';
export * from './common';
