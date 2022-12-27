<script lang="ts">
	import dayjs from "dayjs";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<h1>Blog tag {data.tagName}</h1>

<div class="flex flex-col gap-10">
	{#each data.posts as post}
		<div class="flex flex-col gap-4 bg-secondary p-4 rounded-2">
			<span class="text-xl font-bold">{post.title}</span>
			<div class="flex flex-col md:(flex-row gap-4) gap-2">
				{#if post.tags.length > 0}
					<div class="flex flex-row items-center gap-2">
						<div class="i-fa6-solid:tags" />
						{#each post.tags as tag}
							<a href="/blog/tags/{tag}" class="no-underline">{tag}</a>
						{/each}
					</div>
				{/if}
				<a href="/blog/authors/{post.author}" class="flex items-center gap-2 no-underline"><div class="i-fa6-solid:user" />{post.author}</a>
				<span class="flex items-center gap-2"><div class="i-fa6-solid:calendar" /> {dayjs
					.unix(post.created)
					.format("ddd, DD MMM YYYY HH:mm")}</span>
				<span class="flex items-center gap-2"><div class="i-fa6-solid:pencil" /> {post.words} words</span>
				<span class="flex items-center gap-2"><div class="i-fa6-solid:book-open-reader" /> {post.readingTime} minute read</span>
			</div>
			<span>{post.content.split(" ").slice(0, 20).join(" ") + "..."}</span>
			<a href="/blog/{post.title}">Read more...</a>
		</div>
	{/each}
</div>