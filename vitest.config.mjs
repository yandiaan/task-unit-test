import react from "@vitejs/plugin-react";
import { resolve as pathResolve } from "node:path";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

const resolve = (path) => pathResolve(__dirname, path);

export default defineConfig({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async args => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8')
            }));
          }
        }
      ]
    }
  },
  plugins: [react()],
  test: {
    globals: true,
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    alias: {
      "@": resolve("src"),
    },
    coverage: {
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.{js,jsx,ts,tsx}", "**/*.d.ts"],
    },
    environmentMatchGlobs: [["**/*.test.jsx", "jsdom"]],
    setupFiles: ["./vitest.setup.js"],
    env: loadEnv("", process.cwd(), ""),
  },
});
