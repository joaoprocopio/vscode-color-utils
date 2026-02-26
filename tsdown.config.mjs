import { defineConfig } from "tsdown";

export default defineConfig({
    entry: "./src/extension.ts",
    external: ["vscode"],
    inlineOnly: false,
    sourcemap: true,
    minify: true,
    noExternal: ["colorjs.io"],
});
