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

<button on:click={toggle} class="cursor-pointer flex items-center py-1 px-0 bg-transparent border-0 font-[var(--font-primary)] color-[var(--text)]">
	<div class="i-fa6-solid:{theme === "dark" ? "sun" : "moon"}" />
	<span class="ml-2">Toggle theme</span>
</button>

<style>
	@media screen and (min-width: 900px) {
		span {
			display: none;
			margin-left: 0.25rem;
		}
	}
</style>