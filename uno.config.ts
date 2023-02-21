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
		presetWind({
			dark: "class"
		}),
		presetTypography()
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	safelist: ["i-ic:outline-dark-mode", "i-ic:outline-light-mode"],

	theme: {
		fontFamily: {
			primary: ["var(--font-primary)"]
		},
		colors: {
			accent: "var(--accent)",
			accentTranslucent: "var(--accent-translucent)",
			primary: "var(--primary)",
			secondary: "var(--secondary)",
			tertiary: "var(--tertiary)",
			text: "var(--text)",
			grey: "var(--grey)",
			alt: "var(--alt)",
			altText: "var(--alt-text)"
		},
		breakpoints: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			nav: "890px",
			navPlus1: "891px"
		}
	}
});
