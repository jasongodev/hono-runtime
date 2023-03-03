import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

Hono.prototype.serve = function (options = {}) {
  serve(this.fetch, options?.deno)
  return this
}

export * from 'https://deno.land/std/http/server.ts'
export * from 'https://deno.land/x/hono/mod.ts'
export * from 'https://deno.land/x/hono/middleware.ts'

// Third party middlewares
/*
export { VerifyFirebaseAuthConfig, VerifyFirebaseAuthEnv, verifyFirebaseAuth, getFirebaseToken } from 'https://cdn.skypack.dev/@hono/firebase-auth'
export { RootResolver, graphqlServer, GraphQLParams, getGraphQLParams, errorMessages } from 'https://cdn.skypack.dev/@hono/graphql-server'
export { qwikMiddleware } from 'https://cdn.skypack.dev/@hono/qwik-city'
export { sentry, getSentry, Options as sentryOptions } from 'https://cdn.skypack.dev/@hono/sentry'
export { trpcServer } from 'https://cdn.skypack.dev/@hono/trpc-server'
export { tbValidator } from 'https://cdn.skypack.dev/@hono/typebox-validator'
export { zValidator } from 'https://cdn.skypack.dev/@hono/zod-validator'
*/
