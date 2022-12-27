<script lang="ts">
	import { CardInner, CardOuter, Link, LinksOuter } from "$lib/Card";
	import members from "$lib/Team.json";
</script>

<svelte:head>
	<title>Our team | Project Segfault</title>
	<meta
		name="description"
		content="Team members of Project Segfault."
	/>
</svelte:head>

<h1>Our team</h1>
<CardOuter>
	{#each members as { name, discord, matrix, position, description, github, git, pgp, website, email, picture }}
		<CardInner
			title={name}
			{position}
			{description}
		>
			<LinksOuter>
				{#if matrix}
					<Link
						url={matrix}
						class="matrixcolored"
					>
						<div class="i-simple-icons:matrix" />
					</Link>
				{/if}

				{#if discord}
					<Link
						url={discord}
						class="discordcolored"
					>
						<div class="i-simple-icons:discord" />
					</Link>
				{/if}

				{#if github}
					<Link
						url={github}
						class="githubcolored"
					>
						<div class="i-simple-icons:github" />
					</Link>
				{/if}

				{#if git}
					<Link
						url={git}
						class="gitcolored"
					>
						<div class="i-simple-icons:git" />
					</Link>
				{/if}

				{#if website}
					<Link
						url={website}
						class="web"
					>
						<div class="i-fa6-solid:globe" />
					</Link>
				{/if}

				{#if email}
					<Link
						url="mailto:{email}"
						class="email"
					>
						<div class="i-fa6-solid:envelope" />
					</Link>
				{/if}

				{#if pgp}
					<Link
						url={pgp}
						class="pgp"
					>
						<div class="i-fa6-solid:key" />
					</Link>
				{/if}

				{#if picture}
					<Link
						url={picture}
						class="picture"
					>
						<div class="i-fa6-solid:camera" />
					</Link>
				{/if}
			</LinksOuter>
		</CardInner>
	{/each}
</CardOuter>
