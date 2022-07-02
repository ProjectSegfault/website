<script lang="ts">
	import members from "$lib/Members.json";
</script>

<svelte:head>
    <title>Members | Project Segfault</title>
    <meta name="description" content="Members of Project Segfault.">
</svelte:head>

<div class="members">
	<h1>Members</h1>
	<div class="member-outer">
		{#each members as { name, discord, matrix, position }}
            <div class="member-inner">
                <h2>{name}</h2>

                <h3>Position: {position} </h3>
    
                <div class="socials">
                    {#if matrix}
                        <a href={matrix} class="matrixcolored">[Matrix]</a>
                    {/if}

                    {#if discord}
                        <a href={discord} class="discordcolored">Discord</a>
                    {/if}
                </div>
            </div>
		{/each}
	</div>
</div>

<style>
    .member-outer {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    a {
        border: none;
		border-radius: 10px;
		padding: 0.5rem;
		cursor: pointer;
		font-family: var(--font-primary);
		color: var(--secondary);
		text-decoration: none;
        width: fit-content;
    }

    .matrixcolored {
		background-color: #fff;
	}

	.discordcolored {
		background-color: #5865f2;
		color: #fff !important;
	}

    .socials {
        display: flex;
        flex-direction: row;
        gap: .5rem;
    }
</style>