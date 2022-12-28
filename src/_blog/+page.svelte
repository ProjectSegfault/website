<script lang="ts">
	import dayjs from "dayjs";
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>Timeline | Project Segfault</title>
	<meta
		name="description"
		content="Timeline of Project Segfault's history."
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

<div class="flex flex-col gap-10 mt-16">
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