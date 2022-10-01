<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import Announcements from "$lib/Announcements.svelte";

	let description: string = "Open source development and hosted services.";
</script>

<SvelteSeo title="Home | Project Segfault" {description} />

<Hero
	title="Project Segfault"
	description="Open source development and hosted services"
	marginTop="7"
>
	<div class="buttons">
		<LinkButton
			url="/instances"
			title="Explore our instances"
			icon="i-fa6-solid:bell-concierge"
		/>
		<LinkButton
			url="/donate"
			icon="i-fa6-solid:money-bill"
			title="Donate"
			bg="#F6C915"
			color="#151515"
		/>
	</div>
</Hero>

<Announcements />

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 1rem;
	}

	@media screen and (max-width: 452px) {
		.buttons {
			flex-direction: column;
		}
	}
</style>
