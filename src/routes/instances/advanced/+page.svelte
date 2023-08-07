<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="h1-no-lg flex flex-col sm:(flex-row items-center) gap-4 !mb-0">
	<span class="text-4xl font-bold">{data.title}</span>
	<a
		href="/instances"
		class="button sm:w-fit"
		><div class="i-ic:outline-computer" />
		Simple</a
	>
</div>

<div class="flex flex-col">
	{#each data.instances as category}
		{#each category.data as instance}
			<h2>{instance.name}</h2>
			<ul class="instances flex flex-row flex-wrap gap-2">
				{#if instance.geo}
					<li><a href={instance.geo}>GeoDNS</a></li>
				{/if}
				{#if instance.eu}
					<li><a href={instance.eu}>EU</a></li>
				{/if}
				{#if instance.us}
					<li><a href={instance.us}>US</a></li>
				{/if}
				{#if instance.in}
					<li><a href={instance.in}>IN</a></li>
				{/if}
				{#if instance.bp}
					<li><a href={instance.bp}>Backup</a></li>
				{/if}
				{#if instance.short_geo}
					<li><a href={instance.short_geo}>GeoDNS (Short URL)</a></li>
				{/if}
				{#if instance.short_eu}
					<li><a href={instance.short_eu}>EU (Short URL)</a></li>
				{/if}
				{#if instance.short_us}
					<li><a href={instance.short_us}>US (Short URL)</a></li>
				{/if}
				{#if instance.short_in}
					<li><a href={instance.short_in}>IN (Short URL)</a></li>
				{/if}
				{#if instance.short_bp}
					<li><a href={instance.short_bp}>Backup (Short URL)</a></li>
				{/if}
				{#if instance.tor}
					<li><a href={instance.tor}>Tor</a></li>
				{/if}
				{#if instance.torBp}
					<li><a href={instance.torBp}>Tor backup</a></li>
				{/if}
				{#if instance.i2p}
					<li><a href={instance.i2p}>I2P</a></li>
				{/if}
				{#if instance.i2pBp}
					<li><a href={instance.i2pBp}>I2P backup</a></li>
				{/if}
			</ul>
		{/each}
	{/each}
</div>

<style>
	.instances li:not(:last-child)::after {
		content: ",";
	}
</style>
