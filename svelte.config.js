import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import icons from "unplugin-icons/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte"],

	preprocess: [preprocess()],

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
