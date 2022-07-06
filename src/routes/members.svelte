<script lang="ts">
	import members from "$lib/Members.json";
    import IconDiscord from "~icons/simple-icons/discord";
	import IconMatrix from "~icons/simple-icons/matrix";
	import IconGitHub from "~icons/simple-icons/github";

	import IconGlobe from "~icons/fa6-solid/globe";
</script>

<svelte:head>
    <title>Members | Project Segfault</title>
    <meta name="description" content="Members of Project Segfault.">
</svelte:head>

<div class="members">
	<h1>Members</h1>
	<div class="member-outer">
		{#each members as { name, discord, matrix, position, description, github, website }}
            <div class="member-inner">
                <h2 class="stupidh2">{name} - Position: {position}</h2>
                {#if description}
                    <p class="description">{description}</p>
                {/if}

                <div class="socials">

                    {#if matrix}
                        <a href={matrix} class="matrixcolored"><IconMatrix /></a>
                    {/if}

                    {#if discord}
                        <a href={discord} class="discordcolored"><IconDiscord /></a>
                    {/if}

                    {#if github}
                        <a href={github} class="githubcolored"><IconGitHub /></a>
                    {/if}

                    {#if website}
                        <a href={website} class="button"><IconGlobe /></a>
                    {/if}
                </div>
            </div>
		{/each}
	</div>
</div>

<style>
    .member-outer {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .member-inner {
        background-color: #252525;
        border-radius: 16px;
        padding: 10px;
        width: 30%;
    }
    a {
        border: none;
		border-radius: 10px;
		padding: 0.5rem;
		cursor: pointer;
		font-family: var(--font-primary);
		color: var(--secondary);
		text-decoration: none;
        width: fit-content;
    }

    .matrixcolored {
		background-color: #fff;
        margin-left: 0px;
        font-size: 20px;
        height: 23px;
        vertical-align: middle;
    }

	.discordcolored {
		background-color: #5865f2;
		color: #fff !important;
        margin-left: 0px;
        font-size: 20px;
        height: 23px;
        vertical-align: middle;
	}

    .githubcolored {
		background-color: #333;
		color: #fff !important;
        margin-left: 0px;
        font-size: 20px;
        height: 23px;
        vertical-align: middle;
	}

    .button {
		background-color: var(--tertiary);
		color: #fff !important;
        margin-left: 0px;
        font-size: 20px;
        height: 23px;
        vertical-align: middle;
	}
    .button:hover {
        background-color: var(--accent-tertiary);
        color: var(--secondary) !important;
        transition: all 0.5s;
    }
    .button:active {
		background-color: var(--accent-primary);
        transition: all 0.5s;
    }
    .socials {
        display: flex;
        flex-direction: row;
        gap: .5rem;
    }
	@media only screen and (max-width: 820px) {
        .member-inner {
            width: initial;
        }
    }
</style>