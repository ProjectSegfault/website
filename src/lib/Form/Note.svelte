<script lang="ts">
    export let content: string;
    export let icon: string;
</script>

<div class="note">
    {#if icon}
        <div class={icon} />
    {/if}
    <b>{content}</b>
</div>

<style>
    .note {
		display: flex;
		align-items: center;
		gap: 4px;
	}
</style>