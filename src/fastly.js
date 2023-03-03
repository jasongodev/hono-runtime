import { Hono } from 'hono'

Hono.prototype.serve = function () {
  this.fire()
  return this
}

export * from 'hono'
export * from './middlewares'
