# `karma-typescript` Ambient Module Issue

## Issue

Typescript supports the creation of "ambient modules" via the following syntax:

```typescript
declare module 'testModule' {
  export interface HelloBot {
    sayHello(): string;
  }
}
```

You can then reference the properties of this module via the provided (i.e. `testModule` in this case). This syntax causes `karma-typescript` to throw an error as it is unable to resolve the module properly.

<details>

  <summary>Log from my machine running `npm run test:browser` (I have replaced my home dir with $HOME)</summary>

  ```
  > karma-typescript-issue@ test $HOME/Sandbox/karma-ts
  > karma start

  23 08 2017 11:36:40.658:INFO [compiler.karma-typescript]: Compiling project using Typescript 2.4.2
  23 08 2017 11:36:41.773:INFO [compiler.karma-typescript]: Compiled 3 files in 1090 ms.
  23 08 2017 11:36:42.307:ERROR [karma]: Error: Unable to resolve module [testModule] from [$HOME/Sandbox/karma-ts/src/testComponent.js]
  {
    "extensions": [
      ".js",
      ".json",
      ".ts",
      ".tsx"
    ],
    "filename": "",
    "moduleDirectory": [
      "node_modules"
    ],
    "modules": {
      "assert": "$HOME/Sandbox/karma-ts/node_modules/assert/assert.js",
      "buffer": "$HOME/Sandbox/karma-ts/node_modules/buffer/index.js",
      "child_process": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "cluster": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "console": "$HOME/Sandbox/karma-ts/node_modules/console-browserify/index.js",
      "constants": "$HOME/Sandbox/karma-ts/node_modules/constants-browserify/constants.json",
      "crypto": "$HOME/Sandbox/karma-ts/node_modules/crypto-browserify/index.js",
      "dgram": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "dns": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "domain": "$HOME/Sandbox/karma-ts/node_modules/domain-browser/index.js",
      "events": "$HOME/Sandbox/karma-ts/node_modules/events/events.js",
      "fs": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "http": "$HOME/Sandbox/karma-ts/node_modules/stream-http/index.js",
      "https": "$HOME/Sandbox/karma-ts/node_modules/https-browserify/index.js",
      "module": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "net": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "os": "$HOME/Sandbox/karma-ts/node_modules/os-browserify/browser.js",
      "path": "$HOME/Sandbox/karma-ts/node_modules/path-browserify/index.js",
      "punycode": "$HOME/Sandbox/karma-ts/node_modules/punycode/punycode.js",
      "querystring": "$HOME/Sandbox/karma-ts/node_modules/querystring-es3/index.js",
      "readline": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "repl": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "stream": "$HOME/Sandbox/karma-ts/node_modules/stream-browserify/index.js",
      "_stream_duplex": "$HOME/Sandbox/karma-ts/node_modules/readable-stream/duplex.js",
      "_stream_passthrough": "$HOME/Sandbox/karma-ts/node_modules/readable-stream/passthrough.js",
      "_stream_readable": "$HOME/Sandbox/karma-ts/node_modules/readable-stream/readable.js",
      "_stream_transform": "$HOME/Sandbox/karma-ts/node_modules/readable-stream/transform.js",
      "_stream_writable": "$HOME/Sandbox/karma-ts/node_modules/readable-stream/writable.js",
      "string_decoder": "$HOME/Sandbox/karma-ts/node_modules/string_decoder/lib/string_decoder.js",
      "sys": "$HOME/Sandbox/karma-ts/node_modules/util/util.js",
      "timers": "$HOME/Sandbox/karma-ts/node_modules/timers-browserify/main.js",
      "tls": "$HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/empty.js",
      "tty": "$HOME/Sandbox/karma-ts/node_modules/tty-browserify/index.js",
      "url": "$HOME/Sandbox/karma-ts/node_modules/url/url.js",
      "util": "$HOME/Sandbox/karma-ts/node_modules/util/util.js",
      "vm": "$HOME/Sandbox/karma-ts/node_modules/vm-browserify/index.js",
      "zlib": "$HOME/Sandbox/karma-ts/node_modules/browserify-zlib/lib/index.js",
      "_process": "$HOME/Sandbox/karma-ts/node_modules/process/browser.js"
    },
    "basedir": ".",
    "paths": []
  }
  Error: Cannot find module 'testModule' from '.'
      at $HOME/Sandbox/karma-ts/node_modules/karma-typescript/dist/bundler/resolve/resolver.js:128:23
      at $HOME/Sandbox/karma-ts/node_modules/browser-resolve/index.js:265:24
      at $HOME/Sandbox/karma-ts/node_modules/resolve/lib/async.js:46:14
      at process ($HOME/Sandbox/karma-ts/node_modules/resolve/lib/async.js:173:43)
      at ondir ($HOME/Sandbox/karma-ts/node_modules/resolve/lib/async.js:188:17)
      at load ($HOME/Sandbox/karma-ts/node_modules/resolve/lib/async.js:69:43)
      at onex ($HOME/Sandbox/karma-ts/node_modules/resolve/lib/async.js:92:31)
      at $HOME/Sandbox/karma-ts/node_modules/resolve/lib/async.js:22:47
      at FSReqWrap.oncomplete (fs.js:152:21)
  npm ERR! Test failed.  See above for more details.
  ```

</details>

## Expected Behavior

I would expect that karma-typescript properly handles this use case