import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/cli.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  outDir: "dist",
});
