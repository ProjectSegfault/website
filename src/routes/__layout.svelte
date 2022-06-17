<script>
    import "$lib/app.css";
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Nav />
<main>
    <slot />
</main>
<Footer />