<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="h1-no-lg flex flex-col sm:(flex-row items-center) gap-4 !mb-0">
	<span class="text-4xl font-bold">{data.title}</span>
	<a
		href="/instances/advanced"
		class="button sm:w-fit"
		><div class="i-ic:outline-computer" />
		Advanced</a
	>
</div>

<div class="flex flex-col">
	{#each data.instances as category}
		<div class="flex flex-col">
			<h2>{category.name}</h2>
			<div class="flex flex-row flex-wrap gap-4">
				{#each category.data as instance}
					<a
						href={instance.geo || instance.eu}
						class="flex flex-row items-center gap-4 rounded bg-secondary p-4 w-110 no-underline text-text"
					>
						{#if instance.icon}
							<img
								src={instance.icon}
								alt="{instance.name} logo"
								class="h-20 rounded"
							/>
						{/if}
						<div>
							<span class="text-2xl">{instance.name}</span>
							<p>{instance.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
