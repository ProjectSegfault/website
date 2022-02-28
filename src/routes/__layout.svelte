<script lang="ts">
    import Header from "$lib/Header.svelte"
</script>

<title>MutaTechTips</title>

<Header />

<main>
    <slot></slot>
</main>

<style>
    :global(root) {
        margin: 0;
        padding: 0;
        background-color: #505050;
    }
</style>