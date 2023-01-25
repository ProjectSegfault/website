<script lang="ts">
	import { PostOuter, Title, Meta, PostContent, ReadMore, PostsContainer } from "$lib/BlogCard";

	import type { PageData } from "./$types";
	export let data: PageData;

	$: index = !data.allPosts.error ? data.allPosts.posts.findIndex((post: { slug: string; }) => post.slug === data.post.slug) : null;
	$: next = !data.allPosts.error ? data.allPosts.posts[index - 1] : null;
	$: previous = !data.allPosts.error ? data.allPosts.posts[index + 1] : null;
</script>

{#if !data.allPosts.error}
	<PostOuter url={data.post.url} isPost>
		<div class="text-center mt-4 flex flex-col items-center gap-4">
			<Title post={data.post} isPost />
			<Meta post={data.post} isPost />
		</div>
		<PostContent {data} />
	</PostOuter>
	<div class="flex flex-row flex-wrap justify-center my-4">
		<PostsContainer>
			{#if previous}
				<PostOuter>
					<h1 class="more-posts">Previous post</h1>
					<Title post={previous} />
					<Meta post={previous} />
					<ReadMore post={previous} />
				</PostOuter>
			{/if}
			
			{#if next}
				<PostOuter>
					<h1 class="more-posts">Next post</h1>
					<Title post={next} />
					<Meta post={next} />
					<ReadMore post={next} />
				</PostOuter>
			{/if}
		</PostsContainer>
	</div>

	<style>
		.more-posts {
			@apply border-b-solid border-b-grey border-b-1 m-0;
		}
	</style>
{:else}
	<p>{data.allPosts.message}</p>
{/if}