---
title: Contact Us
description: Do you want to contact us?
---


<script lang="ts">
    import IconLock from '~icons/fa6-solid/lock';
    import HCaptcha from 'svelte-hcaptcha';
</script>


# { title }

{ description }

## Contact Form
<IconLock /> <b>Your IP will be logged for anti-abuse measures.</b>
<form action="https://segfautilities.projectsegfau.lt/api/form" method="POST">
        <input type="text" name="email" class="FormTextbox" placeholder="Email" required="required"/>
        <select id="commentType" name="commentType" required="required" class="button">
            <option value="" selected="selected" disabled="disabled">Select a type of comment</option>
            <option value="Feedback">Feedback</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Question">Question</option>
            <option value="Bug">Bug</option>
        </select>
        <br />
        <textarea id="comment" name="message" rows="4" cols="50" required="required" class="FormTextbox">Your message.</textarea>
        <HCaptcha
            sitekey=67e84266-980c-4050-8a39-142a91928fe8
        />
        <input type="submit" value="Submit" class="button" />
</form>

## Our email

[contact@projectsegfau.lt](mailto:contact@projectsegfau.lt)

_Please be aware that Microsoft often blocks non-popular emails, if you do contact us through there, make sure to check your spam and mark it as not-spam!_

## People

You can find ways to contact individual members [on our Members page](/members).

<style>
    .FormTextbox {
        background-color: var(--tertiary);
        color: var(--text);
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        margin-bottom: 5px;
        font-family: 'Comfortaa', sans-serif;
    }
    .FormTextbox:focus {
        outline: none !important;
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

	.button:hover {
		background-color: var(--accent-tertiary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	.button:active {
		background-color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}
</style>