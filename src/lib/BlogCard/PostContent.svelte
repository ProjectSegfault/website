<script lang="ts">
	export let data: any;
</script>

<div class="prose flex flex-col text-justify m-auto">
	<img src={data.post.feature_image} alt="{data.post.title} image" class="rounded-2">
	{@html data.post.html}
</div>