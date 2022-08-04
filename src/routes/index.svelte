<script lang="ts">
    import SvelteSeo from "svelte-seo";

    let description: string = "7 idiots, 2 OVH vpses, a BuyVM 1024 Slice, a Sun server and a Hitachi Compute Rack.";
    import IconMoneyBill from "~icons/fa6-solid/money-bill";
</script>

<SvelteSeo
	title="Home"
	description={description}
/>

<div class="hero">
    <h1><span>Project</span> <span>Segfault</span></h1>
    
    <p>Open source development and hosted services</p>
    
    <div class="buttons">
        <a href="https://instances.projectsegfau.lt/">Explore our services</a>
        <a href="/projects">Explore our projects</a>
        <a href="/donate"><IconMoneyBill /> Donate</a>
    </div>
</div>

<style>
    h1 {
        font-size: 50px;
        font-weight: 800;
        color: var(--accent-primary);
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 7%;
        font-family: var(--font-header);
    }

    .hero > * {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .hero > p {
        font-size: 30px;
        color: #b6b6b6;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1rem;
    }

    a {
        text-decoration: none;
        background-color: var(--accent-primary);
        padding: 8px 1em 8px 1em;
        color: var(--primary);
        border-radius: 10px;
        transition: filter .25s;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    a:hover {
        filter: brightness(125%);
    }
</style>