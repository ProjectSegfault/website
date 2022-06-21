import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import icons from "unplugin-icons/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ".md"],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: [".md"],
			layout: "./src/lib/Content.svelte"
		})
	],

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				icons({
					compiler: "svelte"
				})
			]
		},
		prerender: {
			default: true
		}
	}
};

export default config;
