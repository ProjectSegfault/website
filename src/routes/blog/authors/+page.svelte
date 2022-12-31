<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<h1>Blog authors</h1>

<div class="flex flex-col gap-4">
	{#each data.authors as author}
		<a href="/blog/authors/{author.slug}" class="bg-secondary w-fit p-2 rounded-2 no-underline">{author.name}</a>
	{/each}
</div>