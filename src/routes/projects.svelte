<script lang="ts">
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

<div class="team">
	<h1>Our projects</h1>
	<div class="projects-outer">
		{#each projects as { name, description, github, website }}
			<div class="projects-inner">
				<div class="main">
					<span>{name}</span>

					{#if description}
						<p class="description">{description}</p>
					{/if}
				</div>

				<div class="socials">
					{#if github}
						<a href={github} class="githubcolored"><IconGitHub /></a
						>
					{/if}

					{#if website}
						<a href={website} class="web"><IconGlobe /></a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.projects-outer {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex-flow: row wrap;
	}

	.projects-inner {
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

	.githubcolored {
		background-color: #333;
		color: #fff !important;
		font-size: 20px;
		height: 23px;
	}

	.web {
		background-color: var(--tertiary);
		color: #fff !important;
		font-size: 20px;
		height: 23px;
		transition: all 0.5s;
	}

	.web:hover {
		background-color: var(--accent);
		color: var(--secondary) !important;
	}

	.socials {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
</style>
