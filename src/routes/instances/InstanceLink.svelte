<script lang="ts">
	import { Link } from "$lib/Card";

	export let url: string;
	export let item: any = 200;
	export let type: "geo" | "eu" | "us" | "backup" | "tor" | "torBp" = "geo";
</script>

{#if type === "tor" || type === "torBp"}
	<Link
		{url}
		class="torcolored"
	>
		<div class="flex flex-row items-center gap-1">
			<div class="i-simple-icons:tor {type === "torBp" ? "" : "h-6 w-6"}" />
			{#if type === "torBp"}
				<span class="text-base">Backup</span>
			{/if}
		</div>
	</Link>
{:else}
	<Link
		{url}
		class="web {item === 200
			? ''
			: 'pointer-events-none cursor-default opacity-50'}"
	>
		<div class="flex items-center gap-2 text-base">
			<div
				class={item === 200
					? "i-fa6-solid:arrow-up-right-from-square"
					: "i-fa6-solid:xmark"}
			/>
			<span>
				{#if item !== 200}
					({item})
				{/if}
				{#if type === "geo"}
					GeoDNS
				{:else if type === "eu"}
					EU
				{:else if type === "us"}
					US
				{:else if type === "backup"}
					Backup
				{/if}
			</span>
		</div>
	</Link>
{/if}		