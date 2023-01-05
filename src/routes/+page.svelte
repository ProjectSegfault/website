<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
	import Announcements from "./Announcements.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	let description: string = "Open source development and hosted services.";
</script>

<SvelteSeo
	title="Home | Project Segfault"
	{description}
/>

<Hero
	title="Project Segfault"
	{description}
	marginTop="4"
>
	<div
		class="flex flex-col sm:flex-row justify-center items-center gap-4 m-4"
	>
		<LinkButton
			url="/instances"
			title="Explore our instances"
			icon="i-ic:outline-room-service text-xl"
		/>
		<LinkButton
			url="/donate"
			icon="i-ic:outline-attach-money text-xl"
			title="Donate"
			bg="#F6C915"
			color="#151515"
		/>
	</div>
</Hero>

<Announcements {data} />
