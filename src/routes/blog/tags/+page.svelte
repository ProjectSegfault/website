<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import { SingleWordLists } from "$lib/BlogCard";
</script>

<h1>{data.title}</h1>

{#if !data.tags.error}
	<SingleWordLists items={data.tags.tags} name="tags" />
{:else}
	<p>{data.tags.message}</p>
{/if}