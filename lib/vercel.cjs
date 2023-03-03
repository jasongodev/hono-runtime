var hono = require('hono');
var nextjs = require('hono/nextjs');
var basicAuth = require('hono/basic-auth');
var bearerAuth = require('hono/bearer-auth');
var cache = require('hono/cache');
var compress = require('hono/compress');
var cors = require('hono/cors');
var etag = require('hono/etag');
var html = require('hono/html');
var jsx = require('hono/jsx');
var jwt = require('hono/jwt');
var logger = require('hono/logger');
var poweredBy = require('hono/powered-by');
var prettyJson = require('hono/pretty-json');

hono.Hono.prototype.serve = function (options = {}) {
  var _options$vercel;
  return nextjs.handle(this, (options == null ? void 0 : (_options$vercel = options.vercel) == null ? void 0 : _options$vercel.path) || '/api');
};
const config = {
  runtime: 'edge'
};

Object.defineProperty(exports, 'basicAuth', {
  enumerable: true,
  get: function () { return basicAuth.basicAuth; }
});
Object.defineProperty(exports, 'bearerAuth', {
  enumerable: true,
  get: function () { return bearerAuth.bearerAuth; }
});
Object.defineProperty(exports, 'cache', {
  enumerable: true,
  get: function () { return cache.cache; }
});
Object.defineProperty(exports, 'compress', {
  enumerable: true,
  get: function () { return compress.compress; }
});
Object.defineProperty(exports, 'cors', {
  enumerable: true,
  get: function () { return cors.cors; }
});
Object.defineProperty(exports, 'etag', {
  enumerable: true,
  get: function () { return etag.etag; }
});
Object.defineProperty(exports, 'html', {
  enumerable: true,
  get: function () { return html.html; }
});
Object.defineProperty(exports, 'raw', {
  enumerable: true,
  get: function () { return html.raw; }
});
Object.defineProperty(exports, 'Fragment', {
  enumerable: true,
  get: function () { return jsx.Fragment; }
});
Object.defineProperty(exports, 'JSXNode', {
  enumerable: true,
  get: function () { return jsx.JSXNode; }
});
Object.defineProperty(exports, 'jsx', {
  enumerable: true,
  get: function () { return jsx.jsx; }
});
Object.defineProperty(exports, 'memo', {
  enumerable: true,
  get: function () { return jsx.memo; }
});
Object.defineProperty(exports, 'jwt', {
  enumerable: true,
  get: function () { return jwt.jwt; }
});
Object.defineProperty(exports, 'logger', {
  enumerable: true,
  get: function () { return logger.logger; }
});
Object.defineProperty(exports, 'poweredBy', {
  enumerable: true,
  get: function () { return poweredBy.poweredBy; }
});
Object.defineProperty(exports, 'prettyJSON', {
  enumerable: true,
  get: function () { return prettyJson.prettyJSON; }
});
exports.config = config;
Object.keys(hono).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return hono[k]; }
  });
});
Object.keys(nextjs).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return nextjs[k]; }
  });
});
