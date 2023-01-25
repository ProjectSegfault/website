<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	export let form: ActionData;
	export let data: PageData;
</script>

<h1>{data.title}</h1>
<form
	method="POST"
	class="flex flex-col gap-4 w-fit children:(!bg-secondary text-start text-text rounded p-2)"
>

	<input type="text" name="username" placeholder="Username" />
	<input type="email" name="email" placeholder="Email" />
	<textarea name="ssh" placeholder="SSH public key" class="resize w-60 h-30 sm:(w-100 h-50)" />

	{#if form?.success}
		{form.message}
	{/if}

	{#if form?.error}
		{form.message}
	{/if}
	<button type="submit" class="transition-all duration-200 text-text hover:brightness-70">Submit</button>
</form>