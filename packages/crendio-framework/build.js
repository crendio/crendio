const esbuild = require("esbuild");
const path = require("path");

esbuild.build({
  entryPoints: ["src/server/main.ts"],
  bundle: true,
  outfile: "../fx-server/resources/framework/build/server.js",
  platform: "node",
  external: [],
});

esbuild.build({
  entryPoints: ["src/client/main.ts"],
  bundle: true,
  outfile: "../fx-server/resources/framework/build/client.js",
  platform: "node",
  external: [],
});
