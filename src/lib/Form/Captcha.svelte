<script lang="ts">
	import HCaptcha from "svelte-hcaptcha";
	import { Note } from "$lib/Form";

	let submit = false;

	const showSubmitButton = () => {
		submit = !submit;
	};

	export let sitekey: string = "";
</script>

<Note
	content="The submit button will be visible when you complete the Captcha."
	icon="i-fa6-solid:circle-info"
/>
<HCaptcha
	{sitekey}
	on:success={showSubmitButton}
/>

<slot />

{#if submit}
	<button
		type="submit"
		value="Submit"
		class="form-button"
	>
		Submit
	</button>
{/if}
