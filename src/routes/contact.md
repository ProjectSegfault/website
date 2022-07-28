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
<form action="https://segfautilities.projectsegfau.lt/api/form" method="POST">
        <div class="ip-note">
            <IconLock />
            <b>Your IP will be logged for anti-abuse measures.</b>
        </div>
        <div class="meta">
            <input type="text" name="email" class="form-textbox" placeholder="Email" required="required"/>
            <select id="commentType" name="commentType" required="required" class="button">
                <option value="" selected="selected" disabled="disabled">Select a type of comment</option>
                <option value="Feedback">Feedback</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Question">Question</option>
                <option value="Bug">Bug</option>
            </select>
        </div>
        <textarea id="comment" name="message" rows="4" cols="25" required="required" class="form-textbox" placeholder="Your message"></textarea>
        <HCaptcha
            sitekey=67e84266-980c-4050-8a39-142a91928fe8
            theme=dark
        />
        <input type="submit" value="Submit" class="button" />
</form>

## Our email

[contact@projectsegfau.lt](mailto:contact@projectsegfau.lt)

_Please be aware that Microsoft often blocks non-popular emails, if you do contact us through there, make sure to check your spam and mark it as not-spam!_

## People

You can find ways to contact individual members [on our Members page](/members).

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: fit-content;
    }

    .ip-note {
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

    @media screen and (max-width: 450px) {
        .meta {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    }

    .form-textbox {
        background-color: var(--tertiary);
        color: var(--text);
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        font-family: 'Comfortaa', sans-serif;
    }
    .form-textbox:focus {
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

	.button:not(select):hover {
		background-color: var(--accent-tertiary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	.button:not(select):active {
		background-color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}
</style>