<script>
	import IconBars from "~icons/fa6-solid/bars";
</script>

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

	<input type="checkbox" id="toggle-menu" />
	<label class="menu-icon" for="toggle-menu">
		<a id="menu-icon">
			<IconBars />
		</a>
	</label>

	<div class="links">
		<a href="https://instances.projectsegfau.lt/">Instances & Gameservers</a
		>
		<a href="/minecraft">Minecraft</a>
		<a href="/donate">Donate</a>
		<a href="/faq">FAQ</a>
		<a href="/contact">Contact</a>
		<a href="/members">Members</a>
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
		align-items: center;
		text-decoration: none;
	}

	.links {
		display: flex;
		gap: 0.5rem;
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

	.menu-icon {
		cursor: pointer;
		display: none;
	}

	#toggle-menu {
		display: none;
	}

	@media screen and (max-width: 1150px) {
		.links {
			display: none;
			width: 100%;
			background-color: var(--secondary);
			padding-top: 2rem;
		}

		nav {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		.links a {
			display: block;
		}

		.menu-icon {
			display: block;
			z-index: 1;
			position: absolute;
			top: 0.45rem;
			right: 1rem;
			background-color: var(--tertiary);
			border: none;
			border-radius: 10px;
			padding: 1rem;
			cursor: pointer;
			line-height: 1;
		}

		#menu-icon {
			display: flex;
			align-items: center;
			color: var(--text);
		}

		#toggle-menu:checked ~ .links {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
