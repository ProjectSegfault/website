<script lang="ts">
	export let url: string = "";
	export let icon: string = "";
	export let title: string = "";
	export let bg: string = "";
	export let color: string = "";
	export let styles: string = "";
</script>

<a
	href={url}
	class="decoration-none bg-accent px-3 py-2 text-primary rounded-2 transition-filter hover:brightness-125 flex items-center w-fit gap-2"
	style="background-color: {bg}; color: {color}; {styles}"
>
	{#if icon}
		<div class={icon} />
	{/if}
	{title}
</a>
