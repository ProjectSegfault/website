<script lang="ts">
    import { Note, Captcha, Form, Meta, TextArea } from "$lib/Form";
	import type { PageData } from "./$types";

    export let data: PageData;

    let title = "Contact us | Project Segfault";
    let description = "Do you want to contact us? (you don't)";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
</svelte:head>

<h1>Contact us</h1>

<span>{description}</span>

<div class="contact-form">
    <h2>Contact form</h2>
    {#if data.state.enabled === true}
        <Form
            action="{data.apiUrl}/api/v1/form"
            method="POST"
            id="contact-form"
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
                <option value="" selected disabled
                    >Select a type of comment</option
                >
                <option value="Feedback">Feedback</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Question">Question</option>
                <option value="Bug">Bug</option>
            </Meta>
            <TextArea id="comment" name="message" placeholder="Your message" />
            <Captcha />
        </Form>
    {:else}
        <div class="flex items-center gap-1">
            <div class="i-fa6-solid:circle-info" />
            <span>The contact form is currently disabled.</span>
        </div>
    {/if}
</div>

<noscript>
	<Note content="The contact form does not work without JavaScript enabled." icon="i-fa6-solid:circle-info" />
	<style>
		.contact-form {
			display: none;
		}
	</style>
</noscript>

<h2>Our Email</h2>

<a href="mailto:contact@projectsegfau.lt">contact@projectsegfau.lt</a>

<span class="italic">
    Please be aware that Microsoft often blocks non-popular emails, if you do contact us through there, make sure to check your spam and mark it as not-spam!
</span>

<h2>People</h2>

<span>
    You can find ways to contact individual team members <a href="/team">on our team page</a>.
</span>
