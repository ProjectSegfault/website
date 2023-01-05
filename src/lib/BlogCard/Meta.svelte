<script lang="ts">
	import dayjs from "dayjs";

	export let post: any;
	export let isPost: boolean = false;
</script>

<div class="flex flex-col gap-2 flex-1 {isPost ? "nav:(flex-row gap-4)" : ""}">
	{#if post.tags.length > 0}
		<div class="flex flex-row items-center gap-2">
			<div class="i-ic:outline-bookmarks text-xl -ml-1" />
			{#each post.tags as tag}
				<a href="/blog/tags/{tag.slug}" class="no-underline rounded-2 p-1 {isPost ? "bg-secondary" : "bg-primary"}">{tag.name}</a>
			{/each}
		</div>
	{/if}
	{#each post.authors as author}
		<a href="/blog/authors/{author.slug}" class="flex items-center gap-2 no-underline"><div class="i-ic:outline-person text-xl -ml-1" />{author.name}</a>
	{/each}
	<span class="flex items-center gap-2"><div class="i-ic:outline-calendar-month text-xl -ml-1" /> {dayjs
		(post.published_at)
		.format("ddd, DD MMM YYYY HH:mm")}</span>
	<span class="flex items-center gap-2"><div class="i-ic:outline-edit text-2xl -ml-1" /> {post.plaintext.trim().split(/\s+/).length} words</span>
	<span class="flex items-center gap-2"><div class="i-ic:outline-import-contacts text-xl -ml-1" /> {post.reading_time} minute read</span>
</div>