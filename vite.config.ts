import { sveltekit } from "@sveltejs/kit/vite";
import unoCSS from "unocss/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [sveltekit(), unoCSS()]
};

export default config;
