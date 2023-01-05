import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ".md"],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"]
		})
	],

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
