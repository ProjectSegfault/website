import { sveltekit } from "@sveltejs/kit/vite";
import unoCSS from "unocss/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), unoCSS()]
};

export default config;
