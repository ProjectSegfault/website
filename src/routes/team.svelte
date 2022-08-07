<script lang="ts">
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

<div class="team">
	<h1>Our team</h1>
	<p>Our excellent team members!</p>
	<div class="team-outer">
		{#each members as { name, discord, matrix, position, description, github, pgp, website, email, picture }}
			<div class="team-inner">
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
						<a href="mailto:{email}" class="email"><IconEmail /></a>
					{/if}

					{#if pgp}
						<a href={pgp} class="pgp"><IconKey /></a>
					{/if}

					{#if picture}
						<a href={picture} class="picture"><IconCamera /></a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.team-outer {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex-flow: row wrap;
	}

	.team-inner {
		background-color: var(--secondary);
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
		background-color: #333;
		color: #fff !important;
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

	.web,
	.email,
	.picture,
	.pgp {
		background-color: var(--tertiary);
		color: #fff !important;
		font-size: 20px;
		height: 23px;
		transition: all 0.25s;
	}

	.web:hover,
	.email:hover,
	.picture:hover,
	.pgp:hover {
		background-color: var(--accent);
		color: #333 !important;
	}

	.socials {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
</style>
