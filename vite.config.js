import { sveltekit } from '@sveltejs/kit/vite';
import icons from "unplugin-icons/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),

		icons({
			compiler: "svelte"
		})
	]
};

export default config;