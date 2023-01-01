<script lang="ts">
	export let content: string = "";
	export let icon: string = "";
</script>

<div class="flex items-center gap-2">
	{#if icon}
		<div class={icon} />
	{/if}
	<b>{content}</b>
</div>
