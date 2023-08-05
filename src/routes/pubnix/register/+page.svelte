<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	import HCaptcha from "svelte-hcaptcha";
	export let form: ActionData;
	export let data: PageData;

	let siteKey = "cb477b1b-6f87-43ee-aa79-71e3302fbb34";
	//export const hcaptchaSiteKey = env.HCAPTCHA_SITE_KEY;
</script>

<h1>{data.title}</h1>

<form
	method="POST"
	class="flex flex-col gap-5"
>
	<div>
		<label for="username">Username</label>
		<input
			type="text"
			name="username"
			placeholder="Username"
			required
		/>
	</div>

	<div>
		<label for="email">Email</label>
		<input
			type="email"
			name="email"
			placeholder="name@example.com"
			required
		/>
	</div>

	<div>
		<label for="ssh"
			><a
				href="https://wiki.projectsegfau.lt/index.php?title=Generating_an_SSH_key"
				>SSH public key</a
			></label
		>
		<textarea
			name="ssh"
			placeholder="[...]"
			rows="5"
			required
		/>
	</div>

	<div>
		<label for="h-captcha-response"><HCaptcha sitekey={siteKey} /> </label>
	</div>

	{#if form?.success}
		{form.message}
	{/if}

	{#if form?.error}
		{form.message}
	{/if}

	<div style="display:block;">
		<input
			id="tos"
			type="checkbox"
			required
		/>
		<label
			for="tos"
			style="display:inline-block;word-break: break-all;"
		>
			I agree to the <a href="/legal/tos">Terms of Service</a>.
		</label>
	</div>

	<button
		type="submit"
		class="transition-filter duration-200 hover:brightness-75"
		>Submit registration <div
			class="i-ic:outline-arrow-circle-right"
		/></button
	>
</form>

<style>
	form > div {
		@apply flex flex-col items-start gap-2 w-fit;
	}

	form label:not([for="tos"]) {
		@apply text-xl font-semibold;
	}

	form input,
	form textarea,
	form button {
		@apply w-110 lt-sm\:w-70 px-2 py-1 bg-secondary rounded flex justify-center items-center gap-2 text-lg;
		border: 1pt solid var(--alt);
	}

	form input[type="checkbox"] {
		display: inline-block;
		width: min-content;
	}
</style>
