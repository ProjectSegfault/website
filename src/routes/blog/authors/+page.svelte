<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { SingleWordLists } from "$lib/BlogCard";
</script>

<svelte:head>
	<title>Blog authors | Project Segfault Blog</title>
</svelte:head>

<h1>Blog authors</h1>

<SingleWordLists items={data.authors} />

