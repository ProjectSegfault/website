<script lang="ts">
	import type { PageData } from "./$types";
	import Team from "./Team.json";

	export let data: PageData;
</script>

<h1>{data.title}</h1>

<div class="flex flex-row flex-wrap gap-4">
	{#each Team as member}
		<div
			class="flex flex-col gap-4 rounded bg-secondary p-4 w-110 no-underline text-text"
		>
			<div class="flex flex-col gap-2 flex-1">
				<span class="text-2xl">{member.name} - {member.position}</span>
				{#if member.description}
					<p>{member.description}</p>
				{/if}
			</div>
			<div class="children:text-text flex flex-row gap-4 text-lg">
				{#if member.website}
					<a
						href={member.website}
						aria-label="Website"
						><div class="i-ic:outline-language" /></a
					>
				{/if}

				{#if member.matrix}
					<a
						href={member.matrix}
						aria-label="Matrix"
						><div class="i-simple-icons:matrix" /></a
					>
				{/if}

				{#if member.xmpp}
					<a
						href={member.xmpp}
						aria-label="XMPP"><div class="i-simple-icons:xmpp" /></a
					>
				{/if}

				{#if member.fedi}
					<a
						href={member.fedi}
						aria-label="Fediverse"
						><div class="i-simple-icons:mastodon" /></a
					>
				{/if}

				{#if member.git}
					<a
						href={member.git}
						aria-label="Git"><div class="i-simple-icons:git" /></a
					>
				{/if}

				{#if member.email}
					<a
						href="mailto:{member.email}"
						aria-label="Email"><div class="i-ic:outline-email" /></a
					>
				{/if}

				{#if member.pgp}
					<a
						href={member.pgp}
						aria-label="PGP key"
						><div class="i-ic:outline-vpn-key" /></a
					>
				{/if}
			</div>
		</div>
	{/each}
</div>
