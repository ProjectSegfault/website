<script lang="ts">
	import { afterUpdate } from "svelte";
	import DarkMode from "svelte-dark-mode";
	import type { Theme } from "svelte-dark-mode/types/DarkMode.svelte";
    import IconSun from "~icons/fa6-solid/sun";
    import IconMoon from "~icons/fa6-solid/moon";


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
	<div on:click={toggle}>
        <IconSun />
    </div>
{:else if theme === "light"}
    <div on:click={toggle}>
        <IconMoon />
    </div>
{/if}

<style>
    div {
        cursor: pointer;
        display: flex;
        align-items: center;
    }
</style>