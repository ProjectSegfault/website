<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { PostsContainer, PostOuter, Title, Meta, ReadMore } from "$lib/BlogCard";
</script>

<svelte:head>
	<title>Blog tag {data.tagName} | Project Segfault Blog</title>
</svelte:head>

<h1>Blog tag <span class="text-accent">{data.tagName}</span></h1>

<PostsContainer>
	{#each data.posts as post}
		<PostOuter>
			<Title {post} />
			<Meta {post} />
			<ReadMore {post} />
		</PostOuter>
	{/each}
</PostsContainer>