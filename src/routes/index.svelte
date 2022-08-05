<script lang="ts">
    import SvelteSeo from "svelte-seo";
    import Hero from "$lib/Hero.svelte";

    let description: string = "7 idiots, 2 OVH vpses, a BuyVM 1024 Slice, a Sun server and a Hitachi Compute Rack.";
    import IconMoneyBill from "~icons/fa6-solid/money-bill";

    let announcements: any = [];
	async function fetchAnnouncements() {
		const url = `https://segfautils.projectsegfau.lt/api/announcements`;
		const response = await fetch(url);
		announcements = await response.json();
        return announcements;
	}

    const promise = fetchAnnouncements();

    import IconCircleInfo from "~icons/fa6-solid/circle-info";
    import IconTriangleExclamation from "~icons/fa6-solid/triangle-exclamation";
</script>

<SvelteSeo
	title="Home"
	description={description}
/>

<Hero title="Project Segfault" description="Open source development and hosted services" marginTop=7>
    <div class="buttons">
        <a href="https://instances.projectsegfau.lt/">Explore our services</a>
        <a href="/projects">Explore our projects</a>
        <a href="/donate"><IconMoneyBill /> Donate</a>
    </div>
</Hero>

<div class="announcements">
    {#await promise}
    <span></span>
    {:then}
            <div class="announcement-container">
                <div class="announcement">
                    <div class="general">
                        {#if (announcements.severity === "info") }
                            <IconCircleInfo />
                            {:else}
                                <IconTriangleExclamation />
                        {/if}
                        <span>
                            {announcements.created}
                        </span>
                    </div>
                    <div class="title">
                        <h1>{announcements.title}</h1>
                    </div>

                    <div class="read-more">
                        <a href={announcements.link}>Read more...</a>
                    </div>
                </div>
            </div>
    {:catch}
        <span></span>
    {/await}
</div>



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

    .buttons a {
        text-decoration: none;
        background-color: var(--accent-primary);
        padding: 8px 1em 8px 1em;
        color: var(--primary);
        border-radius: 10px;
        transition: filter .25s;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .buttons a:hover {
        filter: brightness(125%);
    }

    .announcement-container {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
    }
    
    .announcement {
        color: var(--primary);
        padding: 2rem 1rem;
        border-radius: 10px;
        width: fit-content;
        display: flex;
        flex-direction: column;
    }

    .announcement a {
        color: var(--primary);
    }

    .announcement .general {
        display: flex;
        align-items: center;
        gap: 8px;
    }
</style>

{#if (announcements.severity === "info") }
    <style>
        .announcement {
            background-color: #8caaee;
        }
    </style>
    {:else if (announcements.severity === "low") }
        <style>
            .announcement {
                background-color: #a6d189;
            }
        </style>
    {:else if (announcements.severity === "medium") }
        <style>
            .announcement {
                background-color: #e5c890;
            }
        </style>
    {:else if (announcements.severity === "high") }
        <style>
            .announcement {
                background-color: #e78284;
            }
        </style>
{/if}