"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const { default: next } = require('next');
const nextjsDistDir = '.next';
const nextjsServer = next({
    dev: false,
    conf: {
        distDir: nextjsDistDir,
    },
});
const nextjsHandle = nextjsServer.getRequestHandler();
exports.default = functions
    .region("asia-northeast1")
    .https.onRequest((req, res) => {
    return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
//# sourceMappingURL=nextjsFunc.js.map