import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";
import { defineConfig } from "vitest/config";

console.log(path.resolve(__dirname, "../../packages/form-manager/src/lib"));
export default defineConfig({
	plugins: [svelte()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	resolve: {
		alias: {
			"@svelte.codes/modal-manager": path.resolve(__dirname, "../../packages/modal-manager/src/lib"),
			// "@svelte.codes/form-manager": path.resolve(__dirname, "../../packages/form-manager/src/lib"),
			"@svelte.codes/forms": path.resolve(__dirname, "../../packages/forms/src/lib")
		}
	}
});
