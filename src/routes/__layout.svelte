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

    return {};
  }
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />
