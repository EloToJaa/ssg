import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import { generateEntries, mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: generateEntries('./src/content')
		}
	},

	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: {
				plugins: [tailwind, autoprefixer]
			}
		})
	]
};

export default config;
