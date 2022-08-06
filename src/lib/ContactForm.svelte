<script lang="ts">
	import IconLock from "~icons/fa6-solid/lock";
	import IconInfo from "~icons/fa6-solid/circle-info";
	import HCaptcha from "svelte-hcaptcha";
	let submit = false;

	let showSubmitButton = () => {
		submit = !submit;
	};
</script>

<form
	action="https://segfautils.projectsegfau.lt/api/form"
	method="POST"
	id="contact-form"
>
	<div class="note">
		<IconLock />
		<b>Your IP will be logged for anti-abuse measures.</b>
	</div>
	<div class="meta">
		<input
			type="text"
			name="email"
			class="form-textbox"
			placeholder="Your email"
			required
		/>
		<select id="commentType" name="commentType" required class="button">
			<option value="" selected disabled>Select a type of comment</option>
			<option value="Feedback">Feedback</option>
			<option value="Suggestion">Suggestion</option>
			<option value="Question">Question</option>
			<option value="Bug">Bug</option>
		</select>
	</div>
	<textarea
		id="comment"
		name="message"
		rows="4"
		cols="25"
		required
		class="form-textbox"
		placeholder="Your message"
	/>
	<div class="note">
		<IconInfo />
		<b>The submit button will be visible when you complete the Captcha.</b>
	</div>
	<HCaptcha
		sitekey="67e84266-980c-4050-8a39-142a91928fe8"
		theme="dark"
		on:success={showSubmitButton}
	/>
	{#if submit}
		<input type="submit" value="Submit" class="button" />
	{/if}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: fit-content;
	}

	.note {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.meta {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 1rem;
	}

	.meta > * {
		width: 50%;
	}

	@media screen and (max-width: 450px) {
		.meta {
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		.meta > * {
			width: calc(100% - 1rem);
		}

		.meta > *:nth-child(2) {
			width: 100%;
		}
	}

	.form-textbox {
		background-color: var(--tertiary);
		color: var(--text);
		border-radius: 10px;
		border: none;
		padding: 0.5rem;
		font-family: var(--font-primary);
		outline: none;
	}

	.button {
		background-color: var(--tertiary);
		border: none;
		border-radius: 10px;
		padding: 0.5rem;
		cursor: pointer;
		color: var(--text);
		font-family: var(--font-primary);
		text-decoration: none;
	}

	.button:not(select):hover {
		background-color: var(--accent);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}
</style>
