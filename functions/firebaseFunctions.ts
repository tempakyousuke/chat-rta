interface Functions {
  [key: string]: string;
}

const funcs: Functions = {
  nextjsFunc: "./nextjsFunc",
};

for (const name in funcs) {
  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    exports[name] = require(funcs[name]).default;
  }
}
