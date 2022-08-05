<script>
	import IconBars from "~icons/fa6-solid/bars";
	import IconMatrix from "~icons/simple-icons/matrix";
	import IconGitHub from "~icons/simple-icons/github";
</script>

<nav>
	<a class="brand" href="/">
		<img src="/logo.png" alt="Project Segfault logo" />
		<span>Project Segfault</span>
	</a>

	<input type="checkbox" id="toggle-menu" />
	<label class="menu-icon" for="toggle-menu">
		<div id="menu-icon">
			<IconBars />
		</div>
	</label>

	<div class="links">
		<a href="https://instances.projectsegfau.lt/">Instances</a
		>
		<a href="/minecraft">Minecraft</a>
		<a href="/donate">Donate</a>
		<a href="/faq">FAQ</a>
		<a href="/contact">Contact us</a>
		<a href="/team">Our team</a>
		<a href="/timeline">Timeline</a>
		<a href="https://blog.projectsegfau.lt/">Blog</a>
		<a href="/legal">Legal</a>
		<a href="https://status.projectsegfau.lt/">Status</a>
		<a href="https://matrix.to/#/#project-segfault:projectsegfau.lt/">
			<IconMatrix />
		</a>
		<a href="https://github.com/ProjectSegfault/">
			<IconGitHub />
		</a>
	</div>
</nav>

<style>
	nav {
		background-color: var(--primary);
		border-bottom: 1px solid var(--grey);
		display: flex;
		padding: .5rem;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	a.brand {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--text);
		gap: 8px;
		transition: opacity .25s;
	}

	a.brand:hover {
		opacity: .6;
	}

	.links {
		display: flex;
		gap: 0.5rem;
		
	}

	.links > * {
		padding: .5rem;
		cursor: pointer;
		color: var(--text);
		text-decoration: none;
		transition: color .25s;
		font-size: 13px;
		font-weight: 500;
		display: flex;
		align-items: center;
	}

	.links > *:hover {
		text-decoration: none;
		color: var(--accent-primary);
	}

	img {
		height: 30px;
		border-radius: 50%;
	}

	.menu-icon {
		cursor: pointer;
		display: none;
	}

	#toggle-menu {
		display: none;
	}

	@media screen and (max-width: 870px) {
		.links {
			display: none;
			width: 100%;
			padding-top: 12px;
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
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1;
			position: absolute;
			right: 1rem;
			top: .5rem;
			border: none;
			border-radius: 10px;
			height: 30px;
			width: 30px;
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
