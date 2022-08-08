<script lang="ts">
	import { afterUpdate } from "svelte";
	import DarkMode from "svelte-dark-mode";
	import type { Theme } from "svelte-dark-mode/types/DarkMode.svelte";

	let theme: Theme;

	afterUpdate(() => {
		document.documentElement.className = theme;
	});

	let toggle = () => {
		theme = theme === "dark" ? "light" : "dark";
	};
</script>

<DarkMode bind:theme />

{#if theme === "dark"}
	<div on:click={toggle} class="i-fa6-solid:sun">
	</div>
{:else if theme === "light"}
	<div on:click={toggle} class="i-fa6-solid:moon">
	</div>
{/if}

<style>
	div {
		cursor: pointer;
		display: flex;
		align-items: center;
	}
</style>
