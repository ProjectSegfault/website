<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	const buttonStyles = "cursor-pointer border-none rounded-2 py-6 px-18 text-lg text-text bg-secondary hover:brightness-125 transition duration-250 font-primary"
</script>


{#if Object.keys($page.data.session || {}).length}
	<div class="flex flex-col items-center justify-center gap-4 mt-28">
		<div class="flex flex-row items-center gap-1">
			<span>Signed in as</span><br />
			<span class="font-extrabold">{$page?.data?.session?.user?.email}</span>
		</div>
		<a href="/admin">Go to admin dashboard</a>
		<button on:click={() => signOut()} class={buttonStyles}>Sign out</button>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center gap-4 mt-28">
		<span>You are not signed in</span>
		<button on:click={() => signIn("authentik")} class={buttonStyles}>Sign in using Authentik</button>
	</div>
{/if}
