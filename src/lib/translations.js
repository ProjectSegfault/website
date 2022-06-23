import i18n from "sveltekit-i18n";

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: "en",
			key: "common",
			loader: async () => (await import("../i18n/common.json")).default
		},
		{
			locale: "nb",
			key: "common",
			loader: async () => (await import("../i18n/nb.json")).default
		},
		{
			locale: "fr",
			key: "common",
			loader: async () => (await import("../i18n/fr.json")).default
		}
		/*
		{
			locale: "el",
			key: "common",
			loader: async () => (await import("../i18n/el.json")).default
		}
		*/
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
	config
);
