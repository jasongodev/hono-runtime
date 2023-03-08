"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Hono = void 0;
var hono_1 = require("hono");
var nextjs_1 = require("hono/nextjs");
var HonoRuntime = (function (_super) {
    __extends(HonoRuntime, _super);
    function HonoRuntime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HonoRuntime.prototype.serve = function (options) {
        var _a, _b;
        return (0, nextjs_1.handle)(this, (_b = (_a = options === null || options === void 0 ? void 0 : options.nextjs) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : '/api');
    };
    return HonoRuntime;
}(hono_1.Hono));
exports.Hono = HonoRuntime;
__exportStar(require("hono"), exports);
__exportStar(require("./common"), exports);
__exportStar(require("hono/nextjs"), exports);
