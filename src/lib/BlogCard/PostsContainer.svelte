<script lang="ts">
	export let hasMt: boolean = false;
	export let isHome: boolean = false;
</script>

<div class="flex flex-row flex-wrap gap-10 {hasMt ? "mt-16" : ""} {isHome ? "justify-center" : ""}">
	<slot />
</div>