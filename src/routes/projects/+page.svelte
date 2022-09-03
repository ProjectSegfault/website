<script lang="ts">
	import { CardInner, CardOuter, Link, LinksOuter } from "$lib/Card";
	import projects from "$lib/Projects.json";
</script>

<svelte:head>
	<title>Our projects | Project Segfault</title>
	<meta name="description" content="Our collection of projects." />
</svelte:head>

<h1>Our projects</h1>
<CardOuter>
	{#each projects as { name, description, git, github, website }}
		<CardInner title={name} {description}>
			<LinksOuter>
				{#if website}
					<Link url={website} class="web">
						<div class="i-fa6-solid:globe" />
					</Link>
				{/if}

				{#if github}
					<Link url={github} class="githubcolored">
						<div class="i-simple-icons:github" />
					</Link>
				{/if}

				{#if git}
					<Link url={git} class="gitcolored">
						<div class="i-simple-icons:git" />
					</Link>
				{/if}
			</LinksOuter>
		</CardInner>
	{/each}
</CardOuter>
