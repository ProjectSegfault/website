<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { PostOuter, Title, Meta, PostContent } from "$lib/BlogCard";
</script>

<svelte:head>
	<title>{data.post.title} | Project Segfault Blog</title>
</svelte:head>

<PostOuter url={data.post.url} isPost>
	<div class="text-center mt-4 flex flex-col items-center gap-4">
		<Title post={data.post} isPost />
		<Meta post={data.post} isPost />
	</div>
	<PostContent {data} />
</PostOuter>