<script lang="ts">
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";

	import Nav from "$lib/Nav/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
	import { page } from "$app/stores";
	import PageTransition from "$lib/PageTransition.svelte";
	import type { LayoutData } from "./$types";

	const title = $page.url.pathname.startsWith("/blog")
		? `${$page.data.title} | Project Segfault blog`
		: `${$page.data.title} | Project Segfault`;

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{title}</title>
	{#if $page.data.description}
		<meta
			name="description"
			content={$page.data.description}
		/>
	{/if}
</svelte:head>

<Nav />

<main class="px-8 mb-8 max-w-90rem m-auto">
	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
</main>

<Footer />
