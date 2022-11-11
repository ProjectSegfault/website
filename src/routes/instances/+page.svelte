<script lang="ts">
	import { CardInner, CardOuter, LinksOuter, Link } from "$lib/Card";
    import dayjs from "dayjs";
	import type { PageData } from "../$types";
	
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
                            position={item.status === 200 ? "Up" : "Down"}
                            positionStyles={item.status === 200 ? "color: #4ade80;" : "color: #f87171;"}
                            description={item.description}
                            icon={item.icon}
                        >
                            <LinksOuter>
                                <Link url={item.link} class="web">
                                    <div class="withText">
                                        <div class="i-fa6-solid:globe" />
                                        <span>Instance link</span>
                                    </div>
                                </Link>
                                <Link url={item.project} class="link">
                                    <div class="withText">
                                        <div class="i-fa6-solid:circle-info" />
                                        <span>Project website</span>
                                    </div>
                                </Link>
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

	.withText {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: medium;
	}
</style>
