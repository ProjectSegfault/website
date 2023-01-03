<script lang="ts">
	export let url: string = "";
	export let isPost: boolean = false;
</script>

<div class="flex flex-col gap-4 p-4 rounded-2 {isPost ? "" : "w-120 bg-secondary"}">
	<slot />

	{#if url}
		<a href={url}>View on Ghost</a>
	{/if}
</div>