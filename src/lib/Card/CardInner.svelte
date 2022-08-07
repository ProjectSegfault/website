<script lang="ts">
    export let title: any;
    export let position: any;
    export let description: any;
    export let icon: any;
    export let internal: boolean;

	import IconCircleInfo from "~icons/fa6-solid/circle-info";
</script>

<div class="card-inner">
    <div class="main">
        {#if icon}
            <div>
                <img src={icon} alt="{title} icon">
            </div>
        {/if}
        <div>     
                <span>
                    {title}
                
                    {#if position}
                        - {position}
                    {/if}
                </span>
            
            {#if description}
                <p class="description">{description}</p>
            {/if}
        </div>
    </div>
    <slot />
</div>

<style>
    .card-inner {
        background-color: var(--secondary);
		border-radius: 10px;
		padding: 1rem;
		width: 30em;
		display: flex;
		flex-direction: column;
    }

    @media screen and (max-width: 555px) {
        .card-inner {
            width: 18em;
        }
    }

    .main {
		flex: 1;
        display: flex;
        flex-direction: row;
        gap: 1rem;
	}

    img {
        height: 5rem;
        border-radius: 10px;
    }

    span {
        font-size: 25px;
        font-weight: bold;
    }
</style>