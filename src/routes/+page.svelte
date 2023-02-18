<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import sanitizeHtml from "sanitize-html";
	import type { PageData } from "./$types";

	export let data: PageData;

	$: backgroundColor = "#5cdd8b";

	$: if (!data.announcements.error) {
		if (data.announcements.incident) {
			if (data.announcements.incident.style === "info") {
				backgroundColor = "#0dcaf0";
			} else if (data.announcements.incident.style === "warning") {
				backgroundColor = "#f8a306";
			} else if (data.announcements.incident.style === "danger") {
				backgroundColor = "#dc3545";
			} else if (data.announcements.incident.style === "primary") {
				backgroundColor = "#5cdd8b";
			} else if (data.announcements.incident.style === "light") {
				backgroundColor = "#f8f9fa";
			} else if (data.announcements.incident.style === "dark") {
				backgroundColor = "#212529";
			}
		}
	}
</script>

<Hero />

{#if !data.announcements.error}
	{#if data.announcements.incident}
		<div class="flex flex-col items-center mt-16">
			<div
				class="flex flex-col prose break-words rounded p-4 lt-sm:max-w-74 sm:(p-8) {backgroundColor ===
				'#212529'
					? 'text-text'
					: 'text-black'}"
				style="background-color: {backgroundColor};"
			>
				{#if data.announcements.incident.title}
					<span class="text-xl font-semibold"
						>{data.announcements.incident.title}</span
					>
				{/if}

				{#if data.announcements.incident.content}
					<p>
						{@html sanitizeHtml(
							data.announcements.incident.content.replace(
								/\n/g,
								"<br />"
							)
						)}
					</p>
				{/if}

				<span>Created - {data.announcements.incident.createdDate}</span>
				{#if data.announcements.incident.lastUpdatedDate}
					<span
						>Updated - {data.announcements.incident
							.lastUpdatedDate}</span
					>
				{/if}
			</div>
		</div>
	{/if}
{:else}
	<p>{data.announcements.message}</p>
{/if}
