<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import User from "../User.svelte";
</script>

<h1>{data.title}</h1>

{#if !data.users.error}
	{#if data.users.users.length > 0}
		<p class="my-4">
			There are {data.users.users.length} users on the pubnix.
		</p>
		<div class="flex flex-row flex-wrap gap-4">
			{#each data.users.users as user}
				<User {user} />
			{/each}
		</div>
	{:else}
		<p>No users</p>
	{/if}
{:else}
	<p>{data.users.message}</p>
{/if}
