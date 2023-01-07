<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Pubnix users | Project Segfault</title>
</svelte:head>

<div class="flex flex-col items-center text-center">
	<h1>All users</h1>

	{#if !data.error}
		{#if data.users.length > 0}
			<div class="flex flex-col gap-4">
				{#each data.users as user}
					<div class="flex flex-row gap-4">
						<div class="flex flex-col">
							<span class="text-2xl font-800">{user.username}</span>
							<span class="text-sm">{user.email}</span>
						</div>
						<div class="flex flex-col">
							<span class="text-sm">Joined</span>
							<span class="text-sm">{user.joined}</span>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p>There are no users</p>
		{/if}
	{:else}
		<p>{data.message}</p>
	{/if}
</div>