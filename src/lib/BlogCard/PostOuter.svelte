<script lang="ts">
	export let url: string = "";
</script>

<div class="flex flex-col gap-4 bg-secondary p-4 rounded-2">
	<slot />

	{#if url}
		<a href={url}>View on Ghost</a>
	{/if}
</div>