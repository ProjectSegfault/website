<script lang="ts">
	import { Note, Captcha, Meta, TextArea } from "$lib/Form";
	import type { ActionData, PageServerData } from "./$types";

	export let form: ActionData;
	export let data: PageServerData;
</script>

<svelte:head>
	<title>Contact us | Project Segfault</title>
</svelte:head>

<h1>Contact us</h1>

<div class="contact-form">
	<h2>Contact form</h2>
	<form
		method="POST"
		action="?/form"
		id="contact-form"
		class="flex flex-col gap-4 w-fit"
	>
		<Note
			content="Your IP will be logged for anti-abuse measures."
			icon="i-fa6-solid:lock"
		/>
		<Meta
			inputType="email"
			inputPlaceholder="Your email"
			selectType="commentType"
		>
			<option
				value=""
				selected
				disabled>Select a type of comment</option
			>
			<option value="Feedback">Feedback</option>
			<option value="Suggestion">Suggestion</option>
			<option value="Question">Question</option>
			<option value="Bug">Bug</option>
		</Meta>
		<TextArea
			id="comment"
			name="message"
			placeholder="Your message"
		/>
		<Captcha sitekey={data.hcaptchaSitekey}>
			{#if form?.success}
				{form.message}
			{/if}

			{#if form?.error}
				{form.message}
			{/if}
		</Captcha>
	</form>
</div>

<noscript>
	<Note
		content="The contact form does not work without JavaScript enabled."
		icon="i-fa6-solid:circle-info"
	/>
	<style>
		.contact-form {
			display: none;
		}
	</style>
</noscript>

<h2>Matrix</h2>
<span
	>We have a Matrix space for general discussion, support and announcements
	about Project Segfault over at <a
		href="https://matrix.to/#/#project-segfault:projectsegfau.lt/"
		>this link</a
	>.</span
>

<h2>Our Email</h2>

<a href="mailto:contact@projectsegfau.lt">contact@projectsegfau.lt</a>

<span class="italic">
	Please be aware that Microsoft often blocks non-popular emails, if you do
	contact us through there, make sure to check your spam and mark it as
	not-spam!
</span>

<h2>People</h2>

<span>
	You can find ways to contact individual team members <a href="/team"
		>on our team page</a
	>.
</span>
