<script>
	import { fly } from "svelte/transition";
	export let pathname = "";
</script>

{#key pathname}
	<div
		in:fly={{ x: -10, duration: 250, delay: 250 }}
		out:fly={{ x: 5, duration: 250 }}
	>
		<slot />
	</div>
{/key}
