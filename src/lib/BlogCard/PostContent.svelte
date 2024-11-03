<script lang="ts">
	export let data: any;
</script>

<div class="prose flex flex-col m-auto">
	{#if data.post.feature_image}
		<img
			src={data.post.feature_image}
			alt="{data.post.title} image"
			class="rounded"
		/>
	{/if}
	{@html data.post.html}
</div>
