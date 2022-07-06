<script>
	import "$lib/app.css";
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
	import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
	title="Project Segfault"
	description="4 idiots, a Sun server and a Hitachi Compute Rack."
	canonical="https://projectsegfau.lt/"
	openGraph={{
		url: "https://projectsegfau.lt/",
		title: "Project Segfault",
		description: "4 idiots, a Sun server and a Hitachi Compute Rack.",
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
	<script defer data-domain="projectsegfau.lt" src="https://analytics.projectsegfau.lt/js/plausible.js"></script>
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<Footer />
