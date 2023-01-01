<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import type { PageData } from "./$types";
	export let data: PageData;
	import { PostsContainer, PostOuter, Title, Meta, ReadMore } from "$lib/BlogCard";
</script>

<svelte:head>
	<title>Blog | Project Segfault</title>
	<meta
		name="description"
		content="Project Segfault's blog"
	/>
</svelte:head>

<Hero marginTop="4">
	<h1 class="text-5xl font-800">
		<span class="text-accent">Project Segfault</span> blog
	</h1>
	<div
		class="flex flex-col sm:flex-row justify-center items-center gap-4 m-4"
	>
		<LinkButton
			url="/blog/tags"
			title="Tags"
			icon="i-fa6-solid:tags"
		/>
		<LinkButton
			url="/blog/authors"
			title="Authors"
			icon="i-fa6-solid:user"
		/>
	</div>
</Hero>

<PostsContainer hasMt>
	{#each data.posts as post}
		<PostOuter>
			<Title {post} />
			<Meta {post} />
			<ReadMore {post} />
		</PostOuter>
	{/each}
</PostsContainer>