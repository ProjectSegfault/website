<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { SingleWordLists } from "$lib/BlogCard";
</script>

<h1>{data.title}</h1>

{#if !data.authors.error}
	<SingleWordLists
		items={data.authors.authors}
		name="authors"
	/>
{:else}
	<p>{data.authors.message}</p>
{/if}
