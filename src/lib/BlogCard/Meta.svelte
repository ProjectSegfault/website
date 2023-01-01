<script lang="ts">
	import dayjs from "dayjs";

	export let post: any;
</script>

<div class="flex flex-col md:(flex-row gap-4) gap-2">
	{#if post.tags.length > 0}
		<div class="flex flex-row items-center gap-2">
			<div class="i-fa6-solid:tags" />
			{#each post.tags as tag}
				<a href="/blog/tags/{tag.slug}" class="no-underline">{tag.name}</a>
			{/each}
		</div>
	{/if}
	{#each post.authors as author}
		<a href="/blog/authors/{author.slug}" class="flex items-center gap-2 no-underline"><div class="i-fa6-solid:user" />{author.name}</a>
	{/each}
	<span class="flex items-center gap-2"><div class="i-fa6-solid:calendar" /> {dayjs
		(post.published_at)
		.format("ddd, DD MMM YYYY HH:mm")}</span>
	<span class="flex items-center gap-2"><div class="i-fa6-solid:pencil" /> {post.plaintext.trim().split(/\s+/).length} words</span>
	<span class="flex items-center gap-2"><div class="i-fa6-solid:book-open-reader" /> {post.reading_time} minute read</span>
</div>