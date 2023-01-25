<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { PostsContainer, PostOuter, Title, Meta, ReadMore } from "$lib/BlogCard";
</script>

<h1>Blog tag <span class="text-accent">{data.tagName}</span></h1>

{#if !data.posts.error}
	<PostsContainer>
		{#each data.posts.posts as post}
			<PostOuter>
				<Title {post} />
				<Meta {post} />
				<ReadMore {post} />
			</PostOuter>
		{/each}
	</PostsContainer>
{:else}
	<p>{data.posts.message}</p>
{/if}