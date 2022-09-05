<script>
	import "$lib/app.css";
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
	import SvelteSeo from "svelte-seo";
	import "uno.css";
</script>

<SvelteSeo
	title="Project Segfault"
	description="We host stuff."
	canonical="https://projectsegfau.lt/"
	keywords="projectsegfault, project segfault, privacy services, privacy instances, invidious, nitter, searxng, minecraft"
	openGraph={{
		url: "https://projectsegfau.lt/",
		title: "Project Segfault",
		description: "We host stuff.",
		images: [
			{
				url: "/ProjectSegfault_Desktop_16-9.png",
				width: 850,
				height: 650,
				alt: "Our banner"
			}
		]
	}}
/>

<svelte:head>
	<script
		defer
		data-domain="projectsegfau.lt"
		src="https://analytics.projectsegfau.lt/js/plausible.js"></script>
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<Footer />
