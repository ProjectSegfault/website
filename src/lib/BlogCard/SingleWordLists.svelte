<script lang="ts">
	export let items: any;
	export let name: string;
</script>


<div class="flex flex-col gap-4">
	{#each items as item}
		<a href="/blog/{name}/{item.slug}" class="bg-secondary sm:w-md p-2 rounded no-underline">{item.name}</a>
	{/each}
</div>