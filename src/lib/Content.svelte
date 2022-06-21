<!--TODO: Bring back the SEO stuff-->

<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import * as strings from "$lib/strings";
</script>

<SvelteSeo
	openGraph={{
		title: "Project Segfault",
		description: "4 idiots, a Sun server and a Hitachi Compute Rack.",
		type: "website",
		images: [
			{
				url: strings.SEO_BANNER_URL,
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
