<script lang="ts">
    import Header from "$lib/Header.svelte"
    import '../assets/global.css'
    import SvelteSeo from "svelte-seo"
</script>

<svelte:head>
    <title>Project Segfault</title>
</svelte:head>

<Header />

<main>
    <slot></slot>
</main>