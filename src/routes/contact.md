---
title: Contact Us
description: Do you want to contact us?
---

# {title}

## {description}

# Our email

<p><a href="mailto:contact@projectsegfau.lt">contact@projectsegfau.lt</a></p>
<p><i>Please be aware that Microsoft often blocks non-popular emails, if you do contact us through there, make sure to check your spam and mark it as not-spam!</i></p>

# Invites

<p><a href="https://discord.gg/26EG7fFtfS">Discord</a></p>

<p><a href="https://matrix.to/#/#project-segfault:projectsegfau.lt">Matrix</a></p>

<div id="Active" style="display:none">
    <h1>People</h1>

    <div>
        <span>Midou:</span>
        <a class="matrixcolored" href="https://matrix.to/#/@midou:projectsegfau.lt">[Matrix]</a>
    </div>


    <div>
        <span>MrLeRien:</span>
        <a class="discordcolored" href="https://discord.com/users/213634643327582208">Discord</a>
    </div>

    <div>
        <span>Odyssey:</span>
        <a class="matrixcolored" href="https://matrix.to/#/@odyssey346:projectsegfau.lt">[Matrix]</a>
        <a class="discordcolored" href="https://discord.com/users/315843700490240002">Discord</a>
    </div>

    <div>
        <span>Devnol:</span>
        <a class="matrixcolored" href="https://matrix.to/#/@devnol:projectsegfau.lt">[Matrix]</a>
        <a class="discordcolored" href="https://discordapp.com/users/429353559566319626">Discord</a>
    </div>

</div>

<button
id="hide"
type="button"
onclick='document.getElementById("Active").style.display ="block"; document.getElementById("hide").style.display = "none" ;'
>

    Click to show who is active on what platform

</button>

<style>
    button {
        background-color: var(--accent-primary);
        border: none;
        border-radius: 10px;
        padding: 1rem;
        cursor: pointer;
        font-family: var(--font-primary);
    }

    #Active {
        display: flex;
        flex-direction: column;
    }

    #Active > div {
        margin-top: 36px;
        margin-bottom: 36px;
    }

    #Active a {
        border: none;
        border-radius: 10px;
        padding: .5rem;
        cursor: pointer;
        font-family: var(--font-primary);
        color: var(--secondary);
        text-decoration: none;
        margin-right: 8px;
    }

    .matrixcolored {
        background-color: #fff;
    }

    .discordcolored {
        background-color: #5865F2;
        color: #fff !important;
    }
</style>
