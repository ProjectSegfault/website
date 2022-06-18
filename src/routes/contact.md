---
title: Contact Us
description: Do you want to contact us?
---

# {title}

## {description}

# Our email

<p><a href="mailto:contact@projectsegfau.lt">contact@projectsegfau.lt</a></p>
<p><i>Please be aware that Microsoft often blocks non-popular emails, if you do contact us through there, make sure to check your spam and mark it as not-spam!</i></p>

<h1>People</h1>
<div id="Active" style="display:none">

    <div class="parent">
    <div class="div1">Midou:</div>
    <a class="div2 matrixcolored" href="https://matrix.to/#/@midou:projectsegfau.lt">[Matrix]</a>
    <div class="div3"></div>
    <div class="div4">MrLeRien:</div>
    <a class="div5 discordcolored" href="https://discord.com/users/213634643327582208">Discord</a>
    <div class="div6"></div>
    <div class="div7">Odyssey:</div>
    <a class="div8 matrixcolored" href="https://matrix.to/#/@odyssey346:projectsegfau.lt">[Matrix]</a>
    <a class="div9 discordcolored" href="https://discord.com/users/315843700490240002">Discord</a>
    <div class="div10">Devnol:</div>
    <a class="div11 matrixcolored" href="https://matrix.to/#/@devnol:projectsegfau.lt">[Matrix]</a>
    <a class="div12 discordcolored" href="https://discordapp.com/users/429353559566319626">Discord</a>
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

    .parent {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        max-width: 50%;
        align-items: center;
    }

    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; }
    .div3 { grid-area: 1 / 3 / 2 / 4; }
    .div4 { grid-area: 2 / 1 / 3 / 2; }
    .div5 { grid-area: 2 / 2 / 3 / 3; }
    .div6 { grid-area: 2 / 3 / 3 / 4; }
    .div7 { grid-area: 3 / 1 / 4 / 2; }
    .div8 { grid-area: 3 / 2 / 4 / 3; }
    .div9 { grid-area: 3 / 3 / 4 / 4; }
    .div10 { grid-area: 4 / 1 / 5 / 2; }
    .div11 { grid-area: 4 / 2 / 5 / 3; }
    .div12 { grid-area: 4 / 3 / 5 / 4; }



    #Active a {
        border: none;
        border-radius: 10px;
        padding: .5rem;
        cursor: pointer;
        font-family: var(--font-primary);
        color: var(--secondary);
        text-decoration: none;
    }

    .matrixcolored {
        background-color: #fff;
    }

    .discordcolored {
        background-color: #5865F2;
        color: #fff !important;
    }

</style>
