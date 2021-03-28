"use strict";
const funcs = {
    nextjsFunc: "./nextjsFunc",
};
for (let name in funcs) {
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) {
        exports[name] = require(funcs[name]).default;
    }
}
//# sourceMappingURL=firebaseFunctions.js.map