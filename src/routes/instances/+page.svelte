<script lang="ts">
	import { CardInner, CardOuter, LinksOuter } from "$lib/Card";
    import InstanceLink from "./InstanceLink.svelte";
    import dayjs from "dayjs";
	import type { PageData } from "./$types";
	
    export let data: PageData;
</script>

<svelte:head>
	<title>Our instances | Project Segfault</title>
	<meta name="description" content="Our collection of instances." />
</svelte:head>

<h1>Our instances</h1>

{#if data.state.enabled}
	<div class="flex flex-col gap-4">
		<CardOuter>
			<div class="wrapper">
				{#each data.instances.status as group}
					<h2>{group.name}</h2>
					<div class="items">
						{#each group.data as item}
							<CardInner
								title={item.name}
								description={item.description}
								icon={item.icon}
							>
								<LinksOuter>
									<InstanceLink url={item.link} item={item.status} type="main" />

									{#if item.us}
										<InstanceLink url={item.us} item={item.statusUs} type="us" />
									{/if}

									{#if item.bp}
										<InstanceLink url={item.bp} item={item.statusBp} type="backup" />
									{/if}
								</LinksOuter>
							</CardInner>
						{/each}
					</div>
				{/each}
			</div>
		</CardOuter>
		
		<span>Last updated: {dayjs
			.unix(data.instances.updated)
			.format("DD/MM/YYYY HH:mm:ss")}
		</span>
	</div>

	<style>
		.wrapper {
			display: flex;
			flex-direction: column;
		}

		.items {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 2rem;
		}
	</style>
	{:else}
		<div class="flex items-center gap-1 mt-16">
			<div class="i-fa6-solid:circle-info" />
			<span>Instances are currently disabled.</span>
		</div>
{/if}
