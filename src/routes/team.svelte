<script lang="ts">
    import { CardInner, CardOuter, Link, LinksOuter } from "$lib/Card";
	import members from "$lib/Team.json";
	import IconDiscord from "~icons/simple-icons/discord";
	import IconMatrix from "~icons/simple-icons/matrix";
	import IconGitHub from "~icons/simple-icons/github";
	import IconKey from "~icons/fa6-solid/key";
	import IconGlobe from "~icons/fa6-solid/globe";
	import IconEmail from "~icons/fa6-solid/envelope";
	import IconCamera from "~icons/fa6-solid/camera";
</script>

<svelte:head>
	<title>Our team | Project Segfault</title>
	<meta name="description" content="Team members of Project Segfault." />
</svelte:head>

<h1>Our team</h1>
<CardOuter>
    {#each members as { name, discord, matrix, position, description, github, pgp, website, email, picture }}
        <CardInner title={name} {position} {description}>
            <LinksOuter>
                {#if matrix}
					<Link url={matrix} classes="matrixcolored">
						<IconMatrix />
					</Link>
				{/if}

				{#if discord}
					<Link url={discord} classes="discordcolored">
						<IconDiscord />
					</Link>
				{/if}

				{#if github}
					<Link url={github} classes="githubcolored">
						<IconGitHub />
					</Link>
				{/if}

				{#if website}
					<Link url={website} classes="web">
						<IconGlobe />
					</Link>
				{/if}

				{#if email}
					<Link url="mailto:{email}" classes="email">
						<IconEmail />
					</Link>
				{/if}

				{#if pgp}
					<Link url={pgp} classes="pgp">
						<IconKey />
					</Link>
				{/if}

				{#if picture}
					<Link url={picture} classes="picture">
						<IconCamera />
					</Link>
				{/if}
				
            </LinksOuter>
        </CardInner>
    {/each}
</CardOuter>