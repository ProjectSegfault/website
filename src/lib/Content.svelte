<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Banner from "$lib/images/ProjectSegfault_Desktop_16-9.png";
</script>

<SvelteSeo
	openGraph={{
		title: "Project Segfault",
		description: "4 idiots, a Sun server and a Hitachi Compute Rack.",
		type: "website",
		images: [
			{
				url: Banner,
				width: 850,
				height: 650,
				alt: "Image"
			}
		]
	}}
/>

<svelte:head>
	<title>Project Segfault</title>
</svelte:head>

<div class="mdsvex_content">
	<slot />
</div>
