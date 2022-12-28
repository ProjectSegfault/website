<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData
</script>

{#if data.state.enabled}
	<slot />
{:else}
	<div class="flex items-center gap-2 text-center justify-center mt-16">
		<div class="i-fa6-solid:circle-info" />
		<span>The blog is currently disabled.</span>
	</div>
{/if}