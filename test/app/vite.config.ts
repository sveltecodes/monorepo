import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  resolve: {
    alias: {
      "@svelte.codes/modal-manager": "/Users/matthewdavis/workspace/svelte/lib/packages/modal-manager/src"
    }
  }
});
