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

<button on:click={toggle} class="cursor-pointer flex items-center py-1 px-0 bg-transparent border-0 font-[var(--font-primary)]">
	<div class="i-fa6-solid:{theme === "dark" ? "sun" : "moon"}" />
	<span class="ml-1 sm:hidden">Toggle theme</span>
</button>