import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/lib/components/index.ts'),
			$icons: path.resolve('./src/lib/icons/index.ts'),
			$types: path.resolve('./src/lib/types.ts'),
			$functions: path.resolve('./src/lib/functions'),
			$props: path.resolve('./src/lib/props.ts'),
		}
	},
};

export default config;
