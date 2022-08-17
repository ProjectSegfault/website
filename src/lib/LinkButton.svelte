<script lang="ts">
	export let url: string;
	export let icon: string;
	export let title: string;
	export let bg: string;
	export let color: string;
</script>

<a href={url} style="background-color: {bg}; color: {color};">
	{#if icon}
		<div class={icon} />
	{/if}
	{title}
</a>

<style>
	a {
		text-decoration: none;
		background-color: var(--accent);
		padding: 8px 1em 8px 1em;
		color: var(--primary);
		border-radius: 10px;
		transition: filter 0.25s;
		display: flex;
		align-items: center;
		width: fit-content;
		gap: 4px;
	}

	a:hover {
		filter: brightness(125%);
	}
</style>
