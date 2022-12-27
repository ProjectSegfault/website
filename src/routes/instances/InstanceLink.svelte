<script lang="ts">
	import { Link } from "$lib/Card";

	export let url: string;
	export let item: any;
	export let type: "main" | "us" | "backup";
</script>

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
			{#if type === "main"}
				Visit
			{:else if type === "us"}
				US
			{:else if type === "backup"}
				Backup
			{/if}
		</span>
	</div>
</Link>
