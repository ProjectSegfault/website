<script lang="ts">
	import ThemeToggle from "./ThemeToggle.svelte";
	import Link from "./Link.svelte";
	import Logo from "./Logo.svelte";
	import { slide } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	const links = [
		{ href: "/instances", text: "Instances" },
		{ href: "/pubnix", text: "Pubnix" },
		{
			href: "https://wiki.projectsegfau.lt/",
			text: "Wiki",
			external: true
		},
		{ href: "/blog", text: "Blog" },

		{ href: "/donate", text: "Donate" },
		{ href: "/contact", text: "Contact" },
		{ href: "/team", text: "Team" },
		{
			href: "https://status.projectsegfau.lt/",
			text: "Status",
			external: true
		},
		{ href: "/legal", text: "Legal" },
		{
			href: "https://matrix.to/#/#project-segfault:projectsegfau.lt/",
			text: "Matrix",
			icon: "i-simple-icons:matrix"
		},
		{
			href: "https://join.jabber.network/#general@conference.projectsegfau.lt?join",
			text: "XMPP",
			icon: "i-simple-icons:xmpp"
		},
		{
			href: "https://github.com/ProjectSegfault/",
			text: "GitHub",
			icon: "i-simple-icons:github"
		}
	];

	const allowedWidth = 890;

	let width: number;

	$: showMenu = width > allowedWidth;

	const navStyles =
		"flex items-center justify-between lt-navPlus1:(flex-col items-start) gap-2 p-4 bg-secondary z-50 mb-16";

	const linkContainerStyles =
		"flex items-center gap-4 bg-secondary children:(no-underline text-text)";

	let nav: HTMLElement;

	let lastScrollTop: number;

	let scrollTop: number;

	const handleScroll = () => {
		if (!showMenu) {
			if (scrollTop > lastScrollTop) {
				nav.style.top = "-80px";
			} else {
				nav.style.top = "0";
			}
		}

		lastScrollTop = scrollTop;
	};
</script>

<svelte:window
	bind:innerWidth={width}
	bind:scrollY={scrollTop}
	on:scroll={handleScroll}
/>

<nav
	class="{navStyles} sticky w-full top-0 z-50 js transition-top duration-200"
	bind:this={nav}
>
	<!-- Slot for the progress bar -->
	<slot />

	<!-- Nav without links -->
	<div class="flex items-center justify-between w-full">
		<Logo />
		<button
			on:click={() => (showMenu = !showMenu)}
			aria-label="Toggle menu"
		>
			<div
				class="{showMenu
					? 'i-ic:outline-close'
					: 'i-ic:outline-menu'} navPlus1:hidden"
			/>
		</button>
	</div>

	<!-- Nav with links -->
	<div class={showMenu ? "contents" : "hidden"}>
		<div
			class="
			{linkContainerStyles}
			lt-navPlus1:(flex-col !items-start fixed pl-4 pb-4 z-50 w-full left-0 top-16)
			"
			transition:slide={{ duration: 300, easing: quintOut }}
		>
			{#each links as link}
				<Link
					{link}
					on:click={() =>
						width < allowedWidth
							? (showMenu = false)
							: (showMenu = true)}
				/>
			{/each}
			<ThemeToggle />
		</div>
	</div>
</nav>

<noscript>
	<nav class="{navStyles} no-js">
		<Logo />
		<div
			class="
			{linkContainerStyles}
			lt-navPlus1:(grid grid-cols-2 p-1)
			"
		>
			{#each links as link}
				<Link {link} />
			{/each}
		</div>
	</nav>

	<style>
		.js {
			display: none;
		}
	</style>
</noscript>
