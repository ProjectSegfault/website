<script lang="ts">
    import SvelteSeo from "svelte-seo";

    let description: string = "7 idiots, 2 OVH vpses, a BuyVM 1024 Slice, a Sun server and a Hitachi Compute Rack.";
</script>

<SvelteSeo
	title="Home"
	description={description}
/>

<div class="hero">
    <h1><span>Project</span> <span>Segfault</span></h1>
    
    <p>Open source development <br /> and hosted services</p>
</div>

<h2>What is this?</h2>

<p>
    We are 7 humans who have a decently powerful server. What do we do with this server? Host game servers and random assortment of privacy respecting tools like Invidious, Nextcloud, Matrix etc.... and maybe some original works. You'll see eventually!
</p>

<h2>Tell me more! What do you guys host? Where can I contact you? Can you fix my daughter's iPad?</h2>

<p>
    We can't fix your daughter's iPad, but there is a navigation bar at the top of the page with links to websites and pages that explain things about us, or contain useful information about our services.
</p>

<style>
    h1 {
        font-size: 50px;
        font-weight: 800;
        text-shadow: 0px 2px 2px rgba(78, 78, 78, 0.6);
    }

    h1 > *:first-child {
        color: var(--accent-secondary);
    }

    h1 > *:last-child {
        color: var(--accent-primary);
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: start;
        font-family: var(--font-header);
    }

    .hero > p {
        margin: 0;
        padding: 0;
    }

    .hero > p {
        font-size: 40px;
        font-weight: 600;
        color: #b6b6b6;
    }
</style>