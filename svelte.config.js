import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		}),
		alias: {
			$lib: './src/lib'
		},
		// Need for crawling to work until
		// https://github.com/sveltejs/kit/issues/11133
		// is fixed
		prerender: {
			entries: ['/']
		}
	},
	vitePlugin: {
		inspector: {
			holdMode: true,
			showToggleButton: 'active',
			toggleButtonPos: 'top-right'
		}
	}
};

export default config;
