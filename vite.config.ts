import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      assets: path.resolve(__dirname, "./src/assets"),
      vendor: path.resolve(__dirname, "./src/vendor"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      utils: path.resolve(__dirname, "./src/utils"),
      types: path.resolve(__dirname, "./src/types"),
    },
  },
});
