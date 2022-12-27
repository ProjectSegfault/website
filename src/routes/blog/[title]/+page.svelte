<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="flex flex-col gap-4 bg-secondary p-4 rounded-2">
	<span class="text-xl font-bold flex flex-row items-center gap-2"><a href="/blog" class="flex flex-row items-center gap-2"><div class="i-fa6-solid:arrow-left" /> Back</a> - {data.post.title}</span>
	<div class="flex flex-col md:(flex-row gap-4) gap-2">
		{#if data.post.tags.length > 0}
			<div class="flex flex-row items-center gap-2">
				<div class="i-fa6-solid:tags" />
				{#each data.post.tags as tag}
					<a href="/blog/tags/{tag}" class="no-underline">{tag}</a>
				{/each}
			</div>
		{/if}
		<a href="/blog/authors/{data.post.author}" class="flex items-center gap-2 no-underline"><div class="i-fa6-solid:user" />{data.post.author}</a>
		<span class="flex items-center gap-2"><div class="i-fa6-solid:calendar" /> {dayjs
			.unix(data.post.created)
			.format("ddd, DD MMM YYYY HH:mm")}</span>
		<span class="flex items-center gap-2"><div class="i-fa6-solid:pencil" /> {data.post.words} words</span>
		<span class="flex items-center gap-2"><div class="i-fa6-solid:book-open-reader" /> {data.post.readingTime} minute read</span>
	</div>
	{@html data.content}
</div>