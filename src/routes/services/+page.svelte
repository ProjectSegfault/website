<script>
	import { CardInner, CardOuter, LinksOuter, Link } from "$lib/Card";
	import services from "$lib/Services.json";

	let groups = services.reduce((curr, val) => {
		let group = curr.find((g) => g.category === `${val.category}`);
		if (group) {
			group.values.push(val);
		} else {
			curr.push({ category: `${val.category}`, values: [val] });
		}
		return curr;
	}, []);
</script>

<svelte:head>
	<title>Our services | Project Segfault</title>
	<meta name="description" content="Our collection of services." />
</svelte:head>

<h1>Our services</h1>
<CardOuter>
	<div class="wrapper">
		{#each groups as group}
			<h2>{group.category}</h2>
			<div class="items">
				{#each group.values as item}
					<CardInner
						title={item.name}
						description={item.description}
						icon={item.icon}
					>
						<LinksOuter>
							<Link url={item.website} class="web">
								<div class="withText">
									<div class="i-fa6-solid:globe" />
									<span>Instance link</span>
								</div>
							</Link>
							<Link url={item.projectWebsite} class="link">
								<div class="withText">
									<div class="i-fa6-solid:circle-info" />
									<span>Project website</span>
								</div>
							</Link>
						</LinksOuter>
					</CardInner>
				{/each}
			</div>
		{/each}
	</div>
</CardOuter>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.withText {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: medium;
	}
</style>
