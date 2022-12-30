<script lang="ts">
	import { CardInner, CardOuter, LinksOuter } from "$lib/Card";
	import InstanceLink from "./InstanceLink.svelte";
	import dayjs from "dayjs";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Our instances | Project Segfault</title>
	<meta
		name="description"
		content="Our collection of instances."
	/>
</svelte:head>

<h1>Our instances</h1>

<div class="flex flex-col gap-4">
	<CardOuter>
		<div class="flex flex-col">
			{#each data.instances.status as group}
				<h2>{group.name}</h2>
				<div class="flex flex-row flex-wrap gap-8">
					{#each group.data as item}
						<CardInner
							title={item.name}
							description={item.description}
							icon={item.icon}
						>
							<LinksOuter>
								<InstanceLink
									url={item.link}
									item={item.status}
									type="main"
								/>

								{#if item.us}
									<InstanceLink
										url={item.us}
										item={item.statusUs}
										type="us"
									/>
								{/if}

								{#if item.bp}
									<InstanceLink
										url={item.bp}
										item={item.statusBp}
										type="backup"
									/>
								{/if}
							</LinksOuter>
						</CardInner>
					{/each}
				</div>
			{/each}
		</div>
	</CardOuter>

	<span class="bg-accent w-fit p-2 rounded-2 text-primary"
		>Instances status last updated: {dayjs
			.unix(data.instances.updated)
			.format("DD/MM/YYYY HH:mm:ss")}
	</span>
</div>