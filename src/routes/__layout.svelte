<script lang="ts">
    import Header from "$lib/Header.svelte"
    import '../assets/global.css'
</script>

<title>Project Segfault</title>

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