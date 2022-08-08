<script lang="ts">
	import { CardInner, CardOuter, Link, LinksOuter } from "$lib/Card";
	import projects from "$lib/Projects.json";
	import IconGitHub from "~icons/simple-icons/github";
	import IconGlobe from "~icons/fa6-solid/globe";
	import IconEmail from "~icons/fa6-solid/envelope";
	import IconCamera from "~icons/fa6-solid/camera";
</script>

<svelte:head>
	<title>Our projects | Project Segfault</title>
	<meta name="description" content="Our collection of projects." />
</svelte:head>

<h1>Our projects</h1>
<CardOuter>
	{#each projects as { name, description, github, website }}
		<CardInner title={name} {description}>
			<LinksOuter>
				{#if website}
					<Link url={website} classes="web">
						<IconGlobe />
					</Link>
				{/if}

				{#if github}
					<Link url={github} classes="githubcolored">
						<IconGitHub />
					</Link>
				{/if}
			</LinksOuter>
		</CardInner>
	{/each}
</CardOuter>
