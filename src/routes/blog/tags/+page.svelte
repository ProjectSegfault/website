<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<h1>Blog tags</h1>

<div class="flex flex-col gap-4">
	{#each data.tags as tag}
		<a href="/blog/tags/{tag}" class="bg-secondary w-fit p-2 rounded-2 no-underline">{tag}</a>
	{/each}
</div>