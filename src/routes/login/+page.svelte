<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client";
	import { page } from "$app/stores";
	import type { PageData } from "./$types";
	const buttonStyles = "button w-fit";

	export let data: PageData;
</script>

<h1>{data.title}</h1>

{#if data.hasAuth}
	{#if Object.keys($page.data.session || {}).length}
		<div class="flex flex-col gap-4">
			<div class="flex flex-row items-center gap-1">
				<span>Signed in as</span><br />
				<span class="font-extrabold"
					>{$page?.data?.session?.user?.email}</span
				>
			</div>
			<a href="/admin">Go to admin dashboard</a>
			<button
				on:click={() => signOut()}
				class={buttonStyles}
				><div class="i-ic:outline-logout" />
				Sign out</button
			>
		</div>
	{:else}
		<div class="flex flex-col gap-4">
			<span>You are not signed in</span>
			<button
				on:click={() => signIn("authentik")}
				class={buttonStyles}
				><div class="i-ic:outline-login" />
				Sign in using Authentik</button
			>
		</div>
	{/if}
{:else}
	<div class="flex flex-col gap-4">
		<span>Authentik is not configured</span>
		<a href="https://goauthentik.io/docs/installation"
			>Configure Authentik</a
		>
	</div>
{/if}
