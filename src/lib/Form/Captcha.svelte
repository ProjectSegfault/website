<script>
	import HCaptcha from "svelte-hcaptcha";
	import { Note } from "$lib/Form";

	let submit = false;

	let showSubmitButton = () => {
		submit = !submit;
	};
</script>

<Note
	content="The submit button will be visible when you complete the Captcha."
	icon="i-fa6-solid:circle-info"
/>
<HCaptcha
	sitekey="67e84266-980c-4050-8a39-142a91928fe8"
	on:success={showSubmitButton}
/>
{#if submit}
	<input type="submit" value="Submit" class="form-button" />
{/if}
