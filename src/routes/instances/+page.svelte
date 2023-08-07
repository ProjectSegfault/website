<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	$: longUrl = data.queryLongUrl;

	let toggle = () => {
		longUrl = !longUrl;
	};
</script>

<div class="h1-no-lg flex flex-col sm:(flex-row items-center) gap-4 !mb-0">
	<span class="text-4xl font-bold">{data.title}</span>

	<!-- With JavaScript -->
	<a
		href="/instances/advanced"
		class="button sm:w-fit"
		><div class="i-ic:outline-computer" />
		Advanced</a
	>
	<button
		on:click={toggle}
		class="text-text flex items-center text-sm js"
	>
		<div
			class="i-ic:{longUrl
				? 'baseline-toggle-off bg-alt'
				: 'baseline-toggle-on bg-accent'} h-15 w-15"
		/>
		Use short URL
	</button>

	<!-- Without JavaScript -->
	<noscript>
		<a
			href="?{data.queryLongUrl ? 'short' : ''}"
			class="text-text flex items-center text-sm"
		>
			<div
				class="i-ic:{data.queryLongUrl
					? 'baseline-toggle-off bg-alt'
					: 'baseline-toggle-on bg-accent'} h-15 w-15"
			/>
			Use short URL
		</a>

		<style>
			.js {
				display: none;
			}
		</style>
	</noscript>
</div>

<div class="flex flex-col">
	{#if longUrl}
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
	{:else}
		{#each data.instances as category}
			<div class="flex flex-col">
				<h2>{category.name}</h2>
				<div class="flex flex-row flex-wrap gap-4">
					{#each category.data as instance}
						<a
							href={instance.short_geo ||
								instance.short_eu ||
								instance.geo ||
								instance.eu}
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
	{/if}
</div>
