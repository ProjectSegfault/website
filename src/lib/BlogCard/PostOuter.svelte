<script lang="ts">
	export let url: string = "";
	export let isPost: boolean = false;
</script>

<div class="flex flex-col gap-4 p-4 rounded {isPost ? "" : "w-110 bg-secondary"}">
	<slot />

	{#if url}
		<a href={url} class="text-center">View on Ghost</a>
	{/if}
</div>