<script>
	import IconDiscord from "~icons/simple-icons/discord";
	import IconMatrix from "~icons/simple-icons/matrix";
	import IconGitHub from "~icons/simple-icons/github";
	import IconSignal from "~icons/fa6-solid/signal";
</script>

<footer>
	<hr />
	<div class="content">
		<span>© 2021 - present, Project Segfault</span>

		<div class="links">
			<a href="https://matrix.to/#/#project-segfault:projectsegfau.lt">
				<IconMatrix />
			</a>
			<a href="https://discord.gg/26EG7fFtfS">
				<IconDiscord />
			</a>
			<a href="https://github.com/ProjectSegfault">
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
		position: absolute;
		bottom: 0;
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
</style>
