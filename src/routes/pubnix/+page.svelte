<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Pubnix | Project Segfault</title>
</svelte:head>

<Hero marginTop="4">
	<h1 class="text-5xl font-800">
		<span class="text-accent">Project Segfault</span> pubnix
	</h1>
	<div
		class="flex flex-col sm:flex-row justify-center items-center gap-4 m-4"
	>
		<LinkButton
			url="/pubnix/register"
			title="Register"
			icon="i-ic:outline-plus"
		/>
		<LinkButton
			url="/pubnix/users"
			title="Users"
			icon="i-ic:outline-people text-xl"
		/>
		<LinkButton
			url="/pubnix/faq"
			title="FAQ"
			icon="i-ic:outline-question-mark"
		/>
	</div>
</Hero>

<div class="flex flex-col items-center text-center mt-16">
	<h1>Online users</h1>

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
			<p>No users online</p>
		{/if}
	{:else}
		<p>{data.message}</p>
	{/if}
</div>