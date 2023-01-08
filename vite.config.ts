import { sveltekit } from "@sveltejs/kit/vite";
import unoCSS from "unocss/vite";
import { defineConfig } from "vite";

const config = defineConfig({
	plugins: [
		sveltekit(),
		unoCSS()
	]
});

export default config;
