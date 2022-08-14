require("esbuild").build({
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/index.js",
  minify: true,
  bundle: true,
  target: "es2022",
  // format: "cjs",
  sourcemap: "linked",
  platform: "browser",
  external: ["esbuild"],
});
