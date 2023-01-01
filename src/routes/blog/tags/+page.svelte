<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { SingleWordLists } from "$lib/BlogCard";
</script>

<svelte:head>
	<title>Blog tags | Project Segfault Blog</title>
</svelte:head>

<h1>Blog tags</h1>

<SingleWordLists items={data.tags} name="tags" />