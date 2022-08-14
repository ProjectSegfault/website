<script>
	import { CardInner, CardOuter, LinksOuter, Link } from "$lib/Card";
	import instances from "$lib/Instances.json";

	let groups = instances.reduce((curr, val) => {
		let group = curr.find((g) => g.category === `${val.category}`);
		if (group) {
			group.values.push(val);
		} else {
			curr.push({ category: `${val.category}`, values: [val] });
		}
		return curr;
	}, []);
</script>

<h1>Our instances</h1>
<CardOuter>
	<div class="container">
		{#each groups as group}
			<div class="container-inner">
				<h2>{group.category}</h2>
				<div class="items">
					{#each group.values as item}
						<a href={item.website}>
							<CardInner
								title={item.name}
								description={item.description}
								icon={item.icon}
							>
								<LinksOuter>
									<Link
										url={item.projectWebsite}
										class="web"
									>
										<div class="projectWebsite">
											<div class="i-fa6-solid:globe" />
											<span>Project website</span>
										</div>
									</Link>
								</LinksOuter>
							</CardInner>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</CardOuter>

<style>
	.container-inner,
	.container {
		display: flex;
		flex-direction: column;
	}

	.items {
		display: flex;
		flex-direction: row;
		flex-flow: row wrap;
		gap: 2rem;
	}

	a {
		text-decoration: none;
		color: var(--text);
	}

	.projectWebsite {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: medium;
	}
</style>
