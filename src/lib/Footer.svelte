<script>
	import { page } from "$app/stores";
</script>

<footer>
	{#if $page.url.pathname === "/"}
		<div class="badge">
			<a
				href="https://www.abuseipdb.com/user/82331"
				title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
				style="width: fit-content; padding: 1rem;"
			>
				<img
					src="https://www.abuseipdb.com/contributor/82331.svg"
					alt="AbuseIPDB Contributor Badge"
				/>
			</a>
		</div>
	{/if}
	<div class="content">
		<span>© 2021 - present, Project Segfault <a href="/team">team</a></span>
		<span
			>Made with <a href="https://kit.svelte.dev/">SvelteKit</a> and
			released under the
			<a href="https://opensource.org/licenses/MIT/">MIT license</a
			>.</span
		>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		position: sticky;
		top: 100vh;
	}

	div.content {
		display: flex;
		align-items: center;
		flex-direction: column;
		border-top: 1px solid var(--grey);
		padding: 0.5rem;
	}

	div.content > * {
		color: var(--text);
		font-size: 13px;
		font-weight: 500;
		text-align: center;
	}

	.badge {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 270px;
		background: var(--accent-primary);
		padding: 0.5rem;
		border-radius: 10px;
	}
</style>
