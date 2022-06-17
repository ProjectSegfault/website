<script lang="ts">
	export let title;
	export let description;
    export let separator;
	import SvelteSeo from 'svelte-seo';
    // Enjoy the jank.
    if(title === "Project Segfault") {
        title = "";
        separator = "";
    }
    else {
        separator = "|";
    }
</script>

<SvelteSeo
    openGraph={{
        title: title,
        description: description,
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

<svelte:head>
	<title>{title} {separator} Project Segfault</title>
</svelte:head>

<div class="mdsvex_content">
	<slot />
</div>