<script lang="ts">
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";

	$: currentPage = $page.url.pathname;

	let showMenuButton = false;

	let listStyles = "";

	let innerWidth: number = 0;

	$: showMenuButton = innerWidth < 1030;

	let menuOpen = false;

	$: menuOpen = innerWidth > 1030;

	let showThemeToggle: boolean = true;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const handleNavigation = () => {
		if (showMenuButton) {
			menuOpen = false;
		} else {
			menuOpen = true;
		}
	};

	const menus = [
		{ name: "Instances", url: "/instances" },
		{ name: "Donate", url: "/donate" },
		{ name: "Contact us", url: "/contact" },
		{ name: "Our team", url: "/team" },
		{ name: "Timeline", url: "/timeline" },
		{ name: "Blog", url: "/blog" },
		{ name: "Legal", url: "/legal" },
		{
			name: "Status",
			url: "https://status.projectsegfau.lt/",
			external: true
		}
	];

	$: if (typeof Window === "undefined") {
		menuOpen = true;
		showMenuButton = false;
		showThemeToggle = false;
		listStyles = "list-styles";
	}
</script>

<svelte:window bind:innerWidth />

<nav
	class="bg-primary border-b border-b-solid border-b-grey flex p-2 flex-col justify-between nav:(flex-row items-center)"
>
	<div class="flex flex-row items-center justify-between">
		<a
			class="flex items-center decoration-none text-text gap-2 transition-opacity duration-250 hover:opacity-80"
			href="/"
		>
			<img
				src="/logo.png"
				alt="Project Segfault logo"
				class="h-7"
			/>
			<span>Project Segfault</span>
		</a>

		{#if showMenuButton}
			<button
				on:click={toggleMenu}
				class="i-fa6-solid:bars cursor-pointer mr-2"
			/>
		{/if}
	</div>

	{#if menuOpen}
		<div
			class="{listStyles} flex flex-col pt-2 nav:(flex-row pt-0) gap-2 links"
		>
			{#each menus as { url, name, external }}
				<a
					data-sveltekit-preload-data
					class:active={url !== "/"
						? currentPage.match(url)
						: url === currentPage}
					href={url}
					on:click={handleNavigation}
					>{#if external}
						<div
							class="i-fa6-solid:arrow-up-right-from-square mr-2"
						/>
					{/if}
					{name}
				</a>
			{/each}
			<a
				href="https://matrix.to/#/#project-segfault:projectsegfau.lt/"
				class="icon"
			>
				<div class="i-simple-icons:matrix" />
				<span>Matrix</span>
			</a>
			<a
				href="https://github.com/ProjectSegfault/"
				class="icon"
			>
				<div class="i-simple-icons:github" />
				<span>GitHub</span>
			</a>
			{#if showThemeToggle}
				<div class="icon">
					<ThemeToggle />
				</div>
			{/if}
		</div>
	{/if}
</nav>

<style>
	a.active {
		@apply text-accent;
	}

	.links > * {
		@apply p-2 cursor-pointer text-text decoration-none transition-color duration-25 text-sm font-500 flex items-center hover\:text-accent;
	}

	.icon > span {
		@apply flex nav\:hidden;
	}

	.icon {
		@apply flex flex-row items-center gap-2;
	}

	:global(.list-styles) {
		@apply grid grid-cols-2 gap-2 w-fit links;
	}

	@media screen and (min-width: 1030px) {
		:global(.list-styles) {
			display: flex;
			flex-direction: row;
			padding-top: 0;
		}
	}
</style>
