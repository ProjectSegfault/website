<script>
	import IconDiscord from "~icons/simple-icons/discord";
	import IconMatrix from "~icons/simple-icons/matrix";
	import IconGitHub from "~icons/simple-icons/github";
	import IconSignal from "~icons/fa6-solid/signal";
	import { page } from "$app/stores";
</script>

<footer>
	{#if $page.url.pathname === "/"}
		<a
			href="https://www.abuseipdb.com/user/82331"
			title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
			style="width: fit-content;"
		>
			<img
				src="https://www.abuseipdb.com/contributor/82331.svg"
				alt="AbuseIPDB Contributor Badge"
			/>
		</a>
	{/if}
	<hr />
	<div class="content">
		<span>© 2021 - present, Project Segfault</span>

		<div class="links">
			<a href="https://matrix.to/#/#project-segfault:projectsegfau.lt/">
				<IconMatrix />
			</a>
			<a href="https://github.com/ProjectSegfault/">
				<IconGitHub />
			</a>
			<a href="https://status.projectsegfau.lt/">
				<IconSignal />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		font-size: 20px;
		position: sticky;
		top: 100vh;
		width: calc(100vw - 2rem);
	}

	hr {
		color: var(--accent-primary);
		width: 100%;
		margin-left: 0;
	}

	div.content {
		display: flex;
		justify-content: space-between;
	}

	div.links {
		display: flex;
		gap: 12px;
		margin-left: 8px;
	}

	.links a {
		text-decoration: none;
		display: flex;
		align-items: center;
	}

	@media only screen and (max-width: 500px) {
		.content {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		div.links {
			margin-left: 0;
		}
	}

	img {
		width: 270px;
		background: var(--accent-primary);
		padding: 0.5rem;
		border-radius: 10px;
	}
</style>
