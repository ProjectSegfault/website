<script lang="ts">
	import Component from "./Component.svelte";
	import dayjs from "dayjs";
	import type { PageData } from "./$types";

	import { onMount } from 'svelte';

	export let data: PageData;

	onMount(() => {
		const interval = setInterval(async () => {
			const response = await fetch(`/api/status-data`);
			if (response.ok) {
				data.status = response.json();
			}
		}, 30_000);

		return () => clearInterval(interval);
	});

	const apiData = data.status
</script>

<h1>
	Our instances - Last updated {dayjs
		.unix(apiData.updated)
		.format("DD/MM/YYYY HH:mm")}
</h1>

<h2>General</h2>

<div class="items">
	<Component
		name="Invidious"
		description="A frontend for YouTube."
		icon="https://github.com/iv-org/invidious/raw/master/assets/invidious-colored-vector.svg"
		website="https://invidious.projectsegfau.lt/"
		projectWebsite="https://invidious.io/"
		status={apiData.invidious}
	/>
	<Component
		name="Librarian"
		description="A frontend for Odysee."
		icon="https://codeberg.org/avatars/dd785d92b4d4df06d448db075cd29274"
		website="https://lbry.projectsegfau.lt/"
		projectWebsite="https://codeberg.org/librarian/librarian"
		status={apiData.librarian}
	/>
	<Component
		name="Libreddit"
		description="A frontend for Reddit."
		icon="https://github.com/spikecodes/libreddit/raw/master/static/logo.png"
		website="https://libreddit.projectsegfau.lt/"
		projectWebsite="https://github.com/spikecodes/libreddit"
		status={apiData.libreddit}
	/>
	<Component
		name="Nitter"
		description="A frontend for Twitter."
		icon="https://github.com/zedeus/nitter/raw/master/public/logo.png"
		website="https://nitter.projectsegfau.lt/"
		projectWebsite="https://github.com/zedeus/nitter"
		status={apiData.nitter}
	/>
	<Component
		name="Element"
		description="An open source and decentralized chat application."
		icon="https://element.io/images/logo-mark-primary.svg"
		website="https://chat.projectsegfau.lt/"
		projectWebsite="https://element.io/"
		status={apiData.element}
	/>
	<Component
		name="Piped"
		description="A frontend for YouTube."
		icon="https://github.com/TeamPiped/Piped/raw/master/public/img/icons/logo.svg"
		website="https://piped.projectsegfau.lt/"
		projectWebsite="https://github.com/TeamPiped/Piped"
		status={apiData.piped}
	/>
	<Component
		name="SearXNG"
		description="A private meta-search engine."
		icon="https://docs.searxng.org/_static/searxng-wordmark.svg"
		website="https://search.projectsegfau.lt/search"
		projectWebsite="https://searxng.org/"
		status={apiData.searxng}
	/>
	<Component
		name="Gitea"
		description="A web interface for Git, alternative to GitHub."
		icon="https://gitea.io/images/gitea.png"
		website="https://git.projectsegfau.lt"
		projectWebsite="https://gitea.io/"
		status={apiData.gitea}
	/>
</div>

<h2>Internal</h2>

<div class="items">
	<Component
		name="Portainer"
		description="Portainer instance for our servers."
		icon="https://avatars.githubusercontent.com/u/22225832"
		website="https://portainer.projectsegfau.lt/"
		projectWebsite="https://www.portainer.io/"
		status={apiData.portainer}
	/>
	<Component
		name="mailcow"
		description="Our mail server and webmail."
		icon="https://mailcow.email/images/cow_mailcow.svg"
		website="https://mail.projectsegfau.lt/"
		projectWebsite="https://mailcow.email/"
		status={apiData.mailcow}
	/>
	<Component
		name="Plausible"
		description="Analytics for our website."
		icon="https://avatars.githubusercontent.com/u/54802774"
		website="https://analytics.projectsegfau.lt/projectsegfau.lt"
		projectWebsite="https://plausible.io/"
		status={apiData.plausible}
	/>
</div>

<style>
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
	}
</style>
