<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import {
		PostsContainer,
		PostOuter,
		Title,
		Meta,
		ReadMore
	} from "$lib/BlogCard";
</script>

<div class="h1-no-lg flex flex-col sm:(flex-row items-center) gap-4">
	<span class="text-4xl font-bold">{data.title}</span>
	<a
		href="/blog/tags"
		class="button sm:w-fit"
		><div class="i-ic:outline-bookmarks" />
		Tags</a
	>
	<a
		href="/blog/authors"
		class="button sm:w-fit"
		><div class="i-ic:outline-people text-xl" />
		Authors</a
	>
	<a
		href="https://blog.projectsegfau.lt/rss"
		class="button sm:w-fit !bg-[#ee802f]"
		><div class="i-simple-icons:rss" />
		RSS</a
	>
</div>

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
