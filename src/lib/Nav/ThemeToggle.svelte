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
	class="text-text flex items-center text-sm"
>
	<div
		class="i-ic:{theme === 'dark'
			? 'outline-light-mode'
			: 'outline-dark-mode'} h-4 w-4"
	/>
	<span class="ml-2 navPlus1:(hidden)">Toggle theme</span>
</button>
