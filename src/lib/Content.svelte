<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Banner from "$lib/images/ProjectSegfault_Desktop_16-9.png";
	import * as global from "../i18n/_global.json";
	import { t } from '$lib/translations';
</script>

<SvelteSeo
	openGraph={{
		title: global.NAME,
		description: $t('common.INDEX_DESCRIPTION'),
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
	<title>{global.NAME}</title>
</svelte:head>

<div class="mdsvex_content">
	<slot />
</div>
