import { serve } from 'https://deno.land/std/http/server.ts';
import { Hono } from 'https://deno.land/x/hono/mod.ts';
class HonoRuntime extends Hono {
    serve(options) {
        serve(this.fetch, options?.deno ?? {});
        return this;
    }
}
export { HonoRuntime as Hono };
export * from 'https://deno.land/x/hono/mod.ts';
export * from 'https://deno.land/x/hono/middleware.ts';
