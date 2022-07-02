<nav>
	<a class="brand" href="/">
		<img src="/logo.png" alt="Project Segfault logo" />
		<span
			style="color: var(--accent-secondary); margin-left: 4px; margin-right: 4px;"
			>Project</span
		>
		<span style="color: var(--accent-primary); margin-right: 8px;"
			>Segfault</span
		>
	</a>

	<div class="links">
		<a href="https://instances.projectsegfau.lt/">Instances & Gameservers</a>
		<a href="/minecraft">Minecraft</a>
		<a href="/donate">Donate</a>
		<a href="/faq">FAQ</a>
		<a href="/contact">Contact</a>
		<a href="https://blog.projectsegfau.lt/">Blog</a>
		<a href="/legal">Legal</a>
	</div>
</nav>

<style>
	nav {
		background-color: var(--secondary);
		padding: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	a.brand {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-decoration: none;
	}

	.links > * {
		background-color: var(--tertiary);
		border: none;
		border-radius: 10px;
		padding: 1rem;
		cursor: pointer;
		color: var(--text);
		font-family: var(--font-primary);
		text-decoration: none;
	}

	.links > *:hover {
		background-color: var(--accent-tertiary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	.links > *:active {
		background-color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	img {
		height: 36px;
		border-radius: 50%;
	}

	div.links {
		display: flex;
		gap: 8px;
	}

	@media only screen and (max-width: 820px) {
		nav {
			flex-direction: column;
			align-items: flex-start;
		}

		div.links {
			flex-direction: column;
			margin-top: 10px;
			gap: 19px;
		}
	}
</style>
