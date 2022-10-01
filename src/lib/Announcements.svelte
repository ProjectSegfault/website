<script lang="ts">
	import fetchState from "$lib/fetchState";

	const promise = fetchState("announcements");

	import Note from "$lib/Form/Note.svelte";
	import dayjs from "dayjs";

	let announcements: any = [];
	async function fetchAnnouncements() {
		const url = `https://segfautils.projectsegfau.lt/api/announcements`;
		const response = await fetch(url);
		announcements = await response.json();
		return announcements;
	}
</script>

{#await promise}
	<span />
{:then state}
	{#if state.enabled === "true"}
		<div class="announcements">
			{#await fetchAnnouncements()}
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

						{#if announcements.link}
							<div class="read-more">
								<a href={announcements.link}>Read more...</a>
							</div>
						{/if}
					</div>
				</div>
			{:catch}
				<span />
			{/await}
		</div>

		<noscript>
			<div class="no-js">
				<Note
					content="Announcements do not work without JavaScript enabled."
				/>
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
	{:else}
		<div class="flex items-center gap-1 text-center justify-center mt-16">
			<div class="i-fa6-solid:circle-info" />
			<span>Announcements are currently disabled.</span>
		</div>
	{/if}
{/await}
