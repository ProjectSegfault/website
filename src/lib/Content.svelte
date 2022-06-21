<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Banner from "$lib/images/ProjectSegfault_Desktop_16-9.png";
	import * as strings from "$lib/strings";
	import { t } from '$lib/translations';
</script>

<SvelteSeo
	openGraph={{
		title: strings.NAME,
		description: $t('common.indexDescription'),
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
	<title>{strings.NAME}</title>
</svelte:head>

<div class="mdsvex_content">
	<slot />
</div>
