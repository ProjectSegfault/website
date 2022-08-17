<script lang="ts">
	import { Note, Captcha, Form, Meta, TextArea } from "$lib/Form";
</script>

<Form action="https://segfautils.projectsegfau.lt/api/pubnix" method="POST" id="pubnix-form" >
	<Note content="Your IP will be logged for anti-abuse measures." icon="i-fa6-solid:lock" />
	<Meta inputType="email" inputPlaceholder="Your email" selectType="actionType">
		<option value="" selected disabled>Select a type of action</option>
        <option value="Feedback">Sign up</option>
        <option value="Suggestion">Delete user account</option>
	</Meta>
	<input
		type="text"
		name="sshkey"
		class="form-textbox"
		placeholder="Your SSH public key"
		required
	/>
	<TextArea id="comment" name="message" placeholder="The reason you want to join the pubnix." />
	<Captcha />
</Form>