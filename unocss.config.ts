import {
	defineConfig,
	presetIcons,
	presetTypography,
	transformerVariantGroup,
	transformerDirectives,
	presetWind
} from "unocss";

import { extractorSvelte } from "unocss";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [
		presetIcons(),
		presetTypography(),
		presetWind({
			dark: "class"
		})
	],

	transformers: [transformerVariantGroup(), transformerDirectives()]
});