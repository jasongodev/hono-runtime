import { Hono } from 'hono'

Hono.prototype.serve = function (options = {}) {
  this.fire()
  return this
}

export * from 'hono'
export * from './common'
