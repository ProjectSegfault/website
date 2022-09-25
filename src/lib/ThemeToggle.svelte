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

<div on:click={toggle} class="cursor-pointer flex items-center">
	<div class="i-fa6-solid:{theme === "dark" ? "sun" : "moon"}" />
	<span class="ml-1 sm:hidden">Toggle theme</span>
</div>