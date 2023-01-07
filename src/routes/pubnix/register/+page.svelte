<script lang="ts">
	import type { ActionData } from "./$types";
	import { Note, Meta } from "$lib/Form";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Pubnix registration | Project Segfault</title>
</svelte:head>

<div class="pubnix-form flex flex-col items-center text-center">
	<h2>Pubnix registration</h2>
	<form
		method="POST"
		class="flex flex-col gap-4 w-fit"
	>
		<Note
			content="Your IP will be logged for anti-abuse measures."
			icon="i-ic:outline-lock text-xl"
		/>
		<Meta
			inputType="email"
			inputName="email"
			inputPlaceholder="Your email"
			input2
			input2Type="text"
			input2Placeholder="Your username"
			input2Name="username"
			select={false}
		/>
		{#if form?.success}
			{form.message}
		{/if}

		{#if form?.error}
			{form.message}
		{/if}
		<button type="submit" class="form-button">Submit</button>
	</form>
</div>