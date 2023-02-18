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
			<div class="flex flex-row gap-2">
				{#if instance.geo}
					<a href={instance.geo}>GeoDNS</a>
				{/if}
				{#if instance.eu}
					<a href={instance.eu}>EU</a>
				{/if}
				{#if instance.us}
					<a href={instance.us}>US</a>
				{/if}
				{#if instance.in}
					<a href={instance.in}>IN</a>
				{/if}
				{#if instance.bp}
					<a href={instance.bp}>Backup</a>
				{/if}
				{#if instance.tor}
					<a href={instance.tor}>Tor</a>
				{/if}
				{#if instance.torBp}
					<a href={instance.torBp}>Tor backup</a>
				{/if}
				{#if instance.i2p}
					<a href={instance.i2p}>I2P</a>
				{/if}
				{#if instance.i2pBp}
					<a href={instance.i2pBp}>I2P backup</a>
				{/if}
			</div>
		{/each}
	{/each}
</div>
