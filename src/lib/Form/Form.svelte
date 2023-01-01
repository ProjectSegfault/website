<script lang="ts">
	export let action: string = "";
	export let method: string = "";
	export let id: string = "";
</script>

<form
	{action}
	{method}
	{id}
	class="flex flex-col gap-4 w-fit"
>
	<slot />
</form>

<style>
	:global(.form-button) {
		@apply bg-secondary border-none rounded-2 p-2 cursor-pointer text-text font-primary decoration-none;
	}

	:global(.form-button:not(select):hover) {
		@apply bg-accent decoration-none transition-all duration-500 text-secondary;
	}

	:global(.form-textbox) {
		@apply bg-secondary text-text rounded-2 border-none p-2 font-primary outline-none;
	}
</style>
