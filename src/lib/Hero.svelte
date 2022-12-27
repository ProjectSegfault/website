<script lang="ts">
	export let title: string;
	export let description: string;
	export let marginTop: string;
	let styles: string = "";
	export { styles as style };
</script>

<div
	class="flex flex-col items-center justify-center children:(m-4 p-0 text-center)"
	style="margin-top: {marginTop}%; {styles}"
>
	{#if title}
		<h1 class="text-5xl font-800 text-accent">{title}</h1>
	{/if}
	{#if description}
		<p class="text-3xl text-text">{description}</p>
	{/if}
	<slot />
</div>
