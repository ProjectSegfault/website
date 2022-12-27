<script>
	import HCaptcha from "svelte-hcaptcha";
	import { Note } from "$lib/Form";

	let submit = false;

	const showSubmitButton = () => {
		submit = !submit;
	};
</script>

<Note
	content="The submit button will be visible when you complete the Captcha."
	icon="i-fa6-solid:circle-info"
/>
<HCaptcha
	sitekey="41a7e3f9-595b-494e-ad73-150c410d4a51"
	on:success={showSubmitButton}
/>
{#if submit}
	<input
		type="submit"
		value="Submit"
		class="form-button"
	/>
{/if}
