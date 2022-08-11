<script lang="ts">
	import { CardInner, CardOuter, Link, LinksOuter } from "$lib/Card";
	import members from "$lib/Team.json";
</script>

<svelte:head>
	<title>Our team | Project Segfault</title>
	<meta name="description" content="Team members of Project Segfault." />
</svelte:head>

<h1>Our team</h1>
<CardOuter>
	{#each members as { name, discord, matrix, position, description, git, pgp, website, email, picture }}
		<CardInner title={name} {position} {description}>
			<LinksOuter>
				{#if matrix}
					<Link url={matrix} classes="matrixcolored">
						<div class="i-simple-icons:matrix"></div>
					</Link>
				{/if}

				{#if discord}
					<Link url={discord} classes="discordcolored">
						<div class="i-simple-icons:discord"></div>
					</Link>
				{/if}

				{#if git}
					<Link url={git} classes="gitcolored">
						<div class="i-simple-icons:git"></div>
					</Link>
				{/if}

				{#if website}
					<Link url={website} classes="web">
						<div class="i-fa6-solid:globe"></div>
					</Link>
				{/if}

				{#if email}
					<Link url="mailto:{email}" classes="email">
						<div class="i-fa6-solid:envelope"></div>
					</Link>
				{/if}

				{#if pgp}
					<Link url={pgp} classes="pgp">
						<div class="i-fa6-solid:key"></div>
					</Link>
				{/if}

				{#if picture}
					<Link url={picture} classes="picture">
						<div class="i-fa6-solid:camera"></div>
					</Link>
				{/if}
			</LinksOuter>
		</CardInner>
	{/each}
</CardOuter>