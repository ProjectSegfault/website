<script lang="ts">
    import members from "$lib/Members.json";
	import IconDiscord from "~icons/simple-icons/discord";
	import IconMatrix from "~icons/simple-icons/matrix";
	import IconGitHub from "~icons/simple-icons/github";
	import IconGlobe from "~icons/fa6-solid/globe";
	import IconEmail from "~icons/fa6-solid/envelope";
	import IconCamera from "~icons/fa6-solid/camera";
</script>

<div class="member-outer">
    {#each members as { name, discord, matrix, position, description, github, website, email, picture }}
        <div class="member-inner">
            
            <div class="main">
                <span>{name} - {position}</span>

                {#if description}
                    <p class="description">{description}</p>
                {/if}
            </div>

            <div class="socials">
                {#if matrix}
                    <a href={matrix} class="matrixcolored"><IconMatrix /></a
                    >
                {/if}

                {#if discord}
                    <a href={discord} class="discordcolored"
                        ><IconDiscord /></a
                    >
                {/if}

                {#if github}
                    <a href={github} class="githubcolored"><IconGitHub /></a
                    >
                {/if}

                {#if website}
                    <a href={website} class="web"><IconGlobe /></a>
                {/if}

                {#if email}
                    <a href={email} class="email"><IconEmail /></a>
                {/if}

                {#if picture}
                    <a href={picture} class="picture"><IconCamera /></a>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    .member-outer {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex-flow: row wrap;
	}

	.member-inner {
		background-color: #252525;
		border-radius: 10px;
		padding: 1rem;
		width: 30em;
		display: flex;
		flex-direction: column;
	}

	.main {
		flex: 1;
	}

	span {
		font-size: 25px;
		font-weight: bold;
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
		font-size: 20px;
		height: 23px;
	}

	.discordcolored {
		background-color: #5865f2;
		color: #fff !important;
		font-size: 20px;
		height: 23px;
	}

	.githubcolored {
		background-color: #333;
		color: #fff !important;
		font-size: 20px;
		height: 23px;
	}

	.web, .email, .picture {
		background-color: var(--tertiary);
		color: #fff !important;
		font-size: 20px;
		height: 23px;
	}

	.web:hover {
		background-color: var(--accent-tertiary);
		color: var(--secondary) !important;
		transition: all 0.5s;
	}

	.web:active {
		background-color: var(--accent-primary);
		transition: all 0.5s;
	}

	.socials {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
</style>