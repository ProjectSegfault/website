<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { PostOuter, TitleWithBackButton, Meta, PostContent } from "$lib/BlogCard";
</script>

<svelte:head>
	<title>{data.post.title} | Project Segfault Blog</title>
</svelte:head>

<PostOuter url={data.post.url}>
	<TitleWithBackButton {data} />
	<Meta post={data.post} />
	<PostContent {data} />
</PostOuter>