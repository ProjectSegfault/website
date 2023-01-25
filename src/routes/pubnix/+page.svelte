<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import User, { type UserType } from "./User.svelte";

	const isOnline = (user: UserType) => user.online
</script>

<div class="h1-no-lg flex flex-col sm:(flex-row items-center) gap-4">
	<span class="text-4xl font-bold">Pubnix</span>
	<a href="/pubnix/register" class="button sm:w-fit"><div class="i-ic:outline-plus" /> Register</a>
	<a href="/pubnix/users" class="button sm:w-fit"><div class="i-ic:outline-people" /> Users</a>
	<a href="/pubnix/faq" class="button sm:w-fit"><div class="i-ic:outline-question-mark" /> FAQ</a>
</div>

<h2>Online users</h2>

{#if !data.error}
	{#if data.users.users.some(isOnline)}
		<div class="flex flex-row flex-wrap gap-4">
			{#each data.users.users as user}
				{#if user.online}
					<User {user} />
				{/if}
			{/each}
		</div>
	{:else}
		<p>No users online</p>
	{/if}
{:else}
	<p>{data.message}</p>
{/if}