---
title: Contact us
description: Do you want to contact us?
---

<script lang="ts">
    import ContactForm from "$lib/ContactForm.svelte";
	import Note from "$lib/Form/Note.svelte";
</script>

# { title }

{ description }

<div class="contact-form">
    <h2>Contact form</h2>
    <ContactForm />
</div>

<noscript>
	<Note content="The contact form (and by extension Segfautils) does not work without JavaScript enabled." icon="i-fa6-solid:circle-info" />
	<style>
		.contact-form {
			display: none;
		}
	</style>
</noscript>

## Our email

[contact@projectsegfau.lt](mailto:contact@projectsegfau.lt)

_Please be aware that Microsoft often blocks non-popular emails, if you do contact us through there, make sure to check your spam and mark it as not-spam!_

## People

You can find ways to contact individual team members [on our team page](/team).