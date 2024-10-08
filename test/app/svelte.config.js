import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess({
      style: 'postcss',
      postcss: true
    })
  ],
  resolve: {
    alias: [
      { find: '@svelte.codes/drawer', replacement: '../../packages/drawer/src/lib' },
      { find: '@svelte.codes/modal-manager', replacement: '../../packages/modal-manager/src/lib' },
      { find: '@svelte.codes/form-manager', replacement: '../../packages/form-manager/src/lib' }
    ]
  }
};

export default config;
