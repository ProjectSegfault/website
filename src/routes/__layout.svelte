<script context="module">
	import { locale, loadTranslations } from "$lib/translations";

	export const load = async ({ url }) => {
		const { pathname } = url;

		const defaultLocale = "en"; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		// firefox
		// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
		// chrome
		// https://developer.chrome.com/extensions/i18n#overview-getAcceptLanguages
		// edge
		// https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx

		return {};
	};
</script>

<script>
	import "$lib/app.css";
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
	import SvelteSeo from "svelte-seo";
	import Banner from "$lib/images/ProjectSegfault_Desktop_16-9.png";
	import * as global from "../i18n/_global.json";
	import { t } from "$lib/translations";
</script>

<SvelteSeo
	title="{global.NAME}"
	description="{$t("common.INDEX_DESCRIPTION")}"
	canonical="https://projectsegfau.lt/"
	openGraph={{
		url: "https://projectsegfau.lt/",
		title: global.NAME,
		description: $t("common.INDEX_DESCRIPTION"),
		images: [
			{
				url: Banner,
				width: 850,
				height: 650,
				alt: "Our banner"
			}
		]
	}}
/>

<Nav />

<main>
	<slot />
</main>

<Footer />
