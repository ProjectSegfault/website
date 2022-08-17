<script lang="ts">
	import { Note, Captcha } from "$lib/Form";
</script>

<form
	action="https://segfautils.projectsegfau.lt/api/pubnix"
	method="POST"
	id="contact-form"
>
	<Note content="Your IP will be logged for anti-abuse measures." icon="i-fa6-solid:lock" />
	<div class="meta">
		<input
			type="email"
			name="email"
			class="form-textbox"
			placeholder="Your email"
			required
		/>
		<select id="actionType" name="actionType" required class="form-button">
			<option value="" selected disabled>Select a type of action</option>
			<option value="Feedback">Sign up</option>
			<option value="Suggestion">Delete user account</option>
		</select>
	</div>
	<input
		type="text"
		name="sshkey"
		class="form-textbox"
		placeholder="Your SSH public key"
		required
	/>
	<textarea
		id="comment"
		name="message"
		rows="4"
		cols="25"
		required
		class="form-textbox"
		placeholder="The reason you want to join the pubnix."
	/>
	<Captcha />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: fit-content;
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
		background-color: var(--secondary);
		color: var(--text);
		border-radius: 10px;
		border: none;
		padding: 0.5rem;
		font-family: var(--font-primary);
		outline: none;
	}
</style>