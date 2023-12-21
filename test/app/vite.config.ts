import { sveltekit } from "@sveltejs/kit/vite";
import * as path from "path";
import { defineConfig } from "vitest/config";

console.log(__dirname);
export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	resolve: {
		alias: {
			"@svelte.codes/modal-manager": path.resolve(__dirname, "../../packages/modal-manager/src/lib")
		}
	}
});
