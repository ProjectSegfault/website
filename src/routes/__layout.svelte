<script lang="ts">
    import Header from "$lib/Header.svelte"
    import '../assets/global.css'
    import SvelteSeo from "svelte-seo"
</script>

<title>Project Segfault</title>

<Header />

<main>
    <slot></slot>
</main>

<SvelteSeo
    openGraph={{
        title: 'Project Segfault',
        description: '4 idiots and a Sun server.',
        type: 'website',
        images: [
        {
            url: 'https://projectsegfau.lt:8448/_matrix/media/r0/download/projectsegfau.lt/HBgjhWUExhKPzbpkpIqQfUkF',
            width: 850,
            height: 650,
            alt: 'Image'
        }
        ]
    }}
/>