import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},
	resolve: {
		alias: [
			{ find: "@svelte.codes/modal-manager", replacement: "../../packages/modal-manager/src" },
			{ find: "@svelte.codes/form-manager", replacement: "../../packages/form-manager/src" }
		]
	}
};

export default config;
