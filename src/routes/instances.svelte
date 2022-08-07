<script>
    import { CardInner, CardOuter, Link, LinksOuter } from "$lib/Card";
    import instances from "$lib/Instances.json";
    import IconGlobe from "~icons/fa6-solid/globe";

    let groups = instances.reduce((curr, val) => {
    let group = curr.find(g => g.category === `${val.category}`)
    if (group) {
        group.values.push(val)
    } else {
        curr.push({ category: `${val.category}`, values: [ val ] }) 
    }
    return curr
    }, [])
</script>

<h1>Our instances</h1>
    <CardOuter>
            <div class="container">
                {#each groups as group}
                    <div class="container-inner">
                        <h2>{group.category}</h2>
                        <div class="items">
                            {#each group.values as item }
                                <CardInner title={item.name} description={item.description} icon={item.icon}>
                                    <LinksOuter>
                                        <Link url={item.website} classes="web">
                                            <IconGlobe />
                                        </Link>
                                    </LinksOuter>
                                </CardInner>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
    </CardOuter>

<style>

    .container-inner, .container {
        display: flex;
        flex-direction: column;
    }

    .items {
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        gap: 2rem;
    }
</style>