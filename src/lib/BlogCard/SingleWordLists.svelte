<script lang="ts">
	export let items: any;
</script>


<div class="flex flex-col gap-4">
	{#each items as item}
		<a href="/blog/authors/{item.slug}" class="bg-secondary w-fit p-2 rounded-2 no-underline">{item.name}</a>
	{/each}
</div>