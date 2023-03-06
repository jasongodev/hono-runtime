"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hono = exports.config = void 0;
const hono_1 = require("hono");
const nextjs_1 = require("hono/nextjs");
class HonoRuntime extends hono_1.Hono {
    serve(options) {
        return (0, nextjs_1.handle)(this, options?.vercel?.path ?? '/api');
    }
}
exports.Hono = HonoRuntime;
exports.config = {
    runtime: 'edge'
};
__exportStar(require("hono"), exports);
__exportStar(require("./common"), exports);
__exportStar(require("hono/nextjs"), exports);
