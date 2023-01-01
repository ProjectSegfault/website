<script lang="ts">
	export let hasMt: boolean = false;
</script>

<div class="flex flex-col gap-10 {hasMt ? "mt-16" : ""}">
	<slot />
</div>