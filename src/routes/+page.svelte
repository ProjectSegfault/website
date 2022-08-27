<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import Note from "$lib/Form/Note.svelte";
	import dayjs from "dayjs";

	let description: string = "Open source development and hosted services.";

	let announcements: any = [];
	async function fetchAnnouncements() {
		const url = `https://segfautils.projectsegfau.lt/api/announcements`;
		const response = await fetch(url);
		announcements = await response.json();
		return announcements;
	}

	const promise = fetchAnnouncements();
</script>

<SvelteSeo title="Home | Project Segfault" {description} />

<Hero
	title="Project Segfault"
	description="Open source development and hosted services"
	marginTop="7"
>
	<div class="buttons">
		<LinkButton url="/services" title="Explore our services" icon="i-fa6-solid:bell-concierge" />
		<LinkButton url="/projects" title="Explore our projects" icon="i-fa6-solid:tractor" />
		<LinkButton
			url="/donate"
			icon="i-fa6-solid:money-bill"
			title="Donate"
			bg="#F6C915"
			color="#151515"
		/>
	</div>
</Hero>

<div class="announcements">
	{#await promise}
		<span />
	{:then}
		<div class="announcement-container">
			<div class="announcement">
				<div class="general">
					{#if announcements.severity === "info"}
						<div class="i-fa6-solid:circle-info" />
					{:else}
						<div class="i-fa6-solid:triangle-exclamation" />
					{/if}
					<span>
						{dayjs
							.unix(announcements.created)
							.format("DD/MM/YYYY HH:mm")}
					</span>
				</div>
				<div class="title">
					<h1>{announcements.title}</h1>
				</div>

				<div class="read-more">
					<a href={announcements.link}>Read more...</a>
				</div>
			</div>
		</div>
	{:catch}
		<span />
	{/await}
</div>

<noscript>
	<div class="no-js">
		<Note content="Announcements do not work without JavaScript enabled." />
	</div>
	<style>
		.announcements {
			display: none;
		}
	</style>
</noscript>

{#if announcements.severity === "info"}
	<style>
		.announcement {
			background-color: #8caaee;
		}
	</style>
{:else if announcements.severity === "low"}
	<style>
		.announcement {
			background-color: #a6d189;
		}
	</style>
{:else if announcements.severity === "medium"}
	<style>
		.announcement {
			background-color: #e5c890;
		}
	</style>
{:else if announcements.severity === "high"}
	<style>
		.announcement {
			background-color: #e78284;
		}
	</style>
{/if}

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 1rem;
	}

	@media screen and (max-width: 452px) {
		.buttons {
			flex-direction: column;
		}
	}

	.announcement-container {
		display: flex;
		justify-content: center;
		margin-top: 4rem;
	}

	.announcement {
		color: #252525 !important;
		padding: 2rem 1rem;
		border-radius: 10px;
		width: fit-content;
		display: flex;
		flex-direction: column;
	}

	.announcement a {
		color: #252525;
	}

	.announcement .general {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.no-js {
		@apply flex justify-center text-center text-red;
	}
</style>
