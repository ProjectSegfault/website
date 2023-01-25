<script lang="ts">
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";
	import { slide } from "svelte/transition";
	import { quintOut } from 'svelte/easing';

	$: currentPage = $page.url.pathname;

	$: innerWidth = 0;

	$: isMobile = innerWidth < 1090;

	$: hasJS = typeof Window !== "undefined";

	$: showMenuButton = hasJS && isMobile;

	$: menuOpen = !hasJS || hasJS && !isMobile;

	$: menuOpenMobile = isMobile && menuOpen;

	$: showThemeToggle = hasJS;

	const toggleMenu = () => menuOpen = !menuOpen;

	const handleNavigation = () => showMenuButton ? menuOpen = false : menuOpen = true;

	const menus = [
		{ name: "Instances", url: "/instances" },
		{ name: "Donate", url: "/donate" },
		// { name: "Pubnix", url: "/pubnix" },
		{ name: "Contact", url: "/contact" },
		{ name: "Team", url: "/team" },
		{
			name: "Wiki",
			url: "https://wiki.projectsegfau.lt/",
			external: true
		},
		{ name: "Blog", url: "/blog" },
		{
			name: "Status",
			url: "https://status.projectsegfau.lt/",
			external: true
		},
		{ name: "Legal", url: "/legal" }
	];
</script>

<svelte:window bind:innerWidth />

<nav
	class="bg-primary {menuOpenMobile ? "border-none" : "border-b border-b-solid border-b-grey"} {isMobile ? "py-2" : ""} flex px-2 flex-col justify-between nav:(flex-row items-center)"
	class:hasJSNav={hasJS}
	class:noJSNav={!hasJS}
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
				class="{menuOpen ? "i-ic:outline-close" : "i-ic:outline-menu"} h-4 w-4 cursor-pointer mr-2"
			/>
		{/if}
	</div>

	{#if menuOpen}
		<div
			class="links {isMobile ? "!children:py-2" : ""}"
			class:hasJS={hasJS}
			class:noJS={!hasJS}
			transition:slide="{{duration: 300, easing: quintOut }}"
		>
			{#each menus as { url, name, external }}
				<a
					class:active={url !== "/"
						? currentPage.match(url)
						: url === currentPage}
					href={url}
					on:click={handleNavigation}
					>{#if external}
						<div
							class="i-ic:outline-open-in-new mr-2 h-4 w-4"
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
		@apply py-4 px-2 cursor-pointer text-text decoration-none transition-color duration-250 text-sm font-500 flex items-center hover\:(text-accent);
	}

	.icon > span {
		@apply flex text-sm nav\:hidden;
	}

	.icon {
		@apply flex flex-row items-center gap-2 text-base;
	}

	.hasJS {
		@apply flex flex-col pt-2 gap-2 fixed bg-primary w-full left-0 top-[2.75rem] p-2 z-50 border-b-solid border-b border-b-grey shadow shadow-secondary;
	}

	.noJS {
		@apply grid grid-cols-2 gap-2 pt-2 w-fit;
	}

	.hasJSNav {
		@apply sticky top-0 z-50;
	}

	.noJSNav {
		@apply border-b border-b-solid border-b-grey;
	}

	@media (min-width: 1090px) {
		.hasJS {
			flex-direction: row;
			padding-top: 0;
			position: initial;
			background-color: initial;
			width: initial;
			left: initial;
			top: initial;
			padding: initial;
			z-index: initial;
			border-bottom: initial;
			box-shadow: initial;
		}

		.noJS {
			display: flex;
			flex-direction: row;
			padding-top: 0;
		}
	}
</style>
