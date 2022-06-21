<script>
	import "$lib/app.css";
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<script context="module">
  import { locale, loadTranslations } from '$lib/translations';

  export const load = async ({ url }) => {
    const { pathname } = url;

    const defaultLocale = 'en'; // get from cookie, user session, ...

    const initLocale = locale.get() || defaultLocale; // set default if no locale already set

    await loadTranslations(initLocale, pathname); // keep this just before the `return`

    // firefox
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
    // chrome
    // https://developer.chrome.com/extensions/i18n#overview-getAcceptLanguages
    // edge
    // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
    

    return {};
  }
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />
