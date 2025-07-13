<script lang="ts">
	import { afterUpdate } from "svelte";
	import DarkMode from "svelte-dark-mode";

	let theme: "dark" | "light";

	afterUpdate(() => {
		document.documentElement.className = theme;
	});

	let toggle = () => {
		theme = theme === "dark" ? "light" : "dark";
	};
</script>

<DarkMode bind:theme />

<button
	on:click={toggle}
	class="theme-toggle button text-text flex items-center text-sm navPlus1:!p-x-[.25rem]"
	aria-label="Toggle theme"
>
	<div
		class="i-ic:{theme === 'dark'
			? 'outline-light-mode'
			: 'outline-dark-mode'} h-4 w-4"
	/>
	<span class="navPlus1:(hidden)">Toggle theme</span>
</button>

<style>
	.theme-toggle:hover {
		@apply brightness-70;
	}
</style>
