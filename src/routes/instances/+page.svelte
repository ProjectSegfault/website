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
<div class="flex flex-col gap-4">
    <CardOuter>
        <div class="wrapper">
            {#each data.status as group}
                <h2>{group.name}</h2>
                <div class="items">
                    {#each group.data as item}
                        <CardInner
                            title={item.name}
                            description={item.description}
                            icon={item.icon}
                        >
                            <LinksOuter>
                                <InstanceLink url={item.link} {item} type="main" />

                                {#if item.us}
                                    <InstanceLink url={item.us} {item} type="us" />
                                {/if}

                                {#if item.backup}
                                    <InstanceLink url={item.backup} {item} type="backup" />
                                {/if}
                            </LinksOuter>
                        </CardInner>
                    {/each}
                </div>
            {/each}
        </div>
    </CardOuter>
    
    <span>Last updated: {dayjs
        .unix(data.updated)
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
