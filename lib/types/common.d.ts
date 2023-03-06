import type { Hono } from 'hono';
export interface HonoRuntimeOptions {
    bun?: {
        port?: number;
    };
    deno?: {};
    vercel?: {
        path?: string;
    };
}
export interface HonoBunReturn {
    port?: number;
    fetch: Function;
}
export type HonoCloudflareReturn = Hono;
export type HonoFastlyReturn = Hono;
export type HonoVercelReturn = (req: Request) => Response | Promise<Response>;
export type HonoRuntimeServe = HonoBunReturn | HonoCloudflareReturn | HonoFastlyReturn | HonoVercelReturn | Hono;
export * from 'hono/basic-auth';
export * from 'hono/bearer-auth';
export * from 'hono/cache';
export * from 'hono/compress';
export * from 'hono/cors';
export * from 'hono/etag';
export * from 'hono/html';
export * from 'hono/jsx';
export * from 'hono/jwt';
export * from 'hono/logger';
export * from 'hono/powered-by';
export * from 'hono/pretty-json';
