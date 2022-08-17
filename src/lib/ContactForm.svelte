<script lang="ts">
	import { Note, Captcha, Form, Meta, TextArea } from "$lib/Form";
</script>

<Form action="https://segfautils.projectsegfau.lt/api/form" method="POST" id="contact-form" >
	<Note content="Your IP will be logged for anti-abuse measures." icon="i-fa6-solid:lock" />
	<Meta inputType="email" inputPlaceholder="Your email" selectType="commentType">
		<option value="" selected disabled>Select a type of comment</option>
		<option value="Feedback">Feedback</option>
		<option value="Suggestion">Suggestion</option>
		<option value="Question">Question</option>
		<option value="Bug">Bug</option>
	</Meta>
	<TextArea id="comment" name="message" placeholder="Your message" />
	<Captcha />
</Form>