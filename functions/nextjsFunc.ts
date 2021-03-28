import * as functions from "firebase-functions";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: next } = require("next");

const nextjsDistDir = ".next";

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

export default functions.https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
