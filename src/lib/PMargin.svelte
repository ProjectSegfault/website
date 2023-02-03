<script lang="ts">
	let classes: string = "";
	export { classes as class };
</script>

<p class="my-4 {classes}">
	<slot />
</p>
