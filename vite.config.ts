import { sveltekit } from "@sveltejs/kit/vite";
import unoCSS from "unocss/vite";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import { defineConfig } from "vite";

const config = defineConfig({
	plugins: [sveltekit(), unoCSS(), viteCommonjs()]
});

export default config;
