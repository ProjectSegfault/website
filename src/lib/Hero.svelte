<script lang="ts">
	export let title: string;
	export let description: string;
	export let marginTop: string;
	let styles: string = "";
	export { styles as style };
</script>

<div class="hero" style="margin-top: {marginTop}%; {styles}">
	{#if title}
		<h1>{title}</h1>
	{/if}
	{#if description}
		<p>{description}</p>
	{/if}
	<slot />
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.hero > * {
		margin: 0;
		padding: 0;
		text-align: center;
	}

	p {
		font-size: 30px;
		color: var(--text);
	}

	h1 {
		font-size: 50px;
		font-weight: 800;
		color: var(--accent);
	}
</style>
