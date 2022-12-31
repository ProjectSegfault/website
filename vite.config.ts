import { sveltekit } from "@sveltejs/kit/vite";
import unoCSS from "unocss/vite";
import { defineConfig } from "vite";

const config = defineConfig({
	plugins: [sveltekit(), unoCSS()],
	optimizeDeps: {
		include: ["pg", "pg-hstore"]
	}
});

export default config;
