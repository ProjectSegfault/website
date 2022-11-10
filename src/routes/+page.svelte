<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import Hero from "$lib/Hero.svelte";
	import LinkButton from "$lib/LinkButton.svelte";
    import dayjs from "dayjs";
	import type { PageData } from "./$types";

    export let data: PageData;

    let announcements = data.announcements;

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

{#if data.state.enabled}
    {#if announcements.error}
        <span />
    {:else}
        <div class="announcements">
            <div class="announcement-container">
                <div class="announcement">
                    <div class="general">
                        {#if announcements.severity === "info"}
                            <div class="i-fa6-solid:circle-info" />
                        {:else}
                            <div class="i-fa6-solid:triangle-exclamation" />
                        {/if}
                        <span>
                            {announcements.author} -
                        </span>
                        <span>
                            {dayjs
                                .unix(announcements.created)
                                .format("DD/MM/YYYY HH:mm")}
                        </span>
                    </div>
                    <div class="title">
                        <span class="text-xl font-semibold">{announcements.title}</span>
                    </div>

                    {#if announcements.link}
                        <div class="read-more">
                            <a href={announcements.link}>Read more...</a>
                        </div>
                    {/if}
                </div>
            </div>
    </div>

    {#if announcements.severity === "info"}
        <style>
            .announcement {
                background-color: #8caaee;
            }
        </style>
    {:else if announcements.severity === "low"}
        <style>
            .announcement {
                background-color: #a6d189;
            }
        </style>
    {:else if announcements.severity === "medium"}
        <style>
            .announcement {
                background-color: #e5c890;
            }
        </style>
    {:else if announcements.severity === "high"}
        <style>
            .announcement {
                background-color: #e78284;
            }
        </style>
    {/if}

    <style>
        .announcement-container {
            display: flex;
            justify-content: center;
            margin-top: 4rem;
        }

        .announcement {
            color: #252525 !important;
            padding: 2rem 1rem;
            border-radius: 10px;
            width: fit-content;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .announcement a {
            color: #252525;
        }

        .announcement .general {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .no-js {
            @apply flex justify-center text-center text-red;
        }
    </style>
    {/if}
{:else}
    <div class="flex items-center gap-1 text-center justify-center mt-16">
        <div class="i-fa6-solid:circle-info" />
        <span>Announcements are currently disabled.</span>
    </div>
{/if}

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
