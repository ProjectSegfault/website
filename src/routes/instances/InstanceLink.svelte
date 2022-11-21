<script lang="ts">
    import { Link } from "$lib/Card";

    export let url: string;
    export let item: any;
    export let type: "main" | "us" | "backup";
</script>

<Link {url} class="web {item === true ? "" : "pointer-events-none cursor-default opacity-50"}">
    <div class="withText">
        <div class="{item === true ? "i-fa6-solid:arrow-up-right-from-square" : "i-fa6-solid:xmark"}" />
        <span>
            {#if type === "main"}
                Visit
            {:else if type === "us"}
                US
            {:else if type === "backup"}
                Backup
            {/if}
        </span>
    </div>
</Link>

<style>
    .withText {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: medium;
	}
</style>