import { defineConfig } from "tsup";

export default defineConfig({
  target: "esnext",
  clean: true,
  dts: true,
  entry: ["src"],
  keepNames: true,
  minify: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  format: ["cjs", "esm"],
});
