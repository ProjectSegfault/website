<script lang="ts">
	export let post: any;
	export let isPost: boolean = false;
</script>

{#if !isPost}
	<a href="/blog/{post.slug}" class="text-text no-underline hover:underline"><span class="text-xl font-bold">{post.title}</span></a>
{:else}
	<span class="text-xl font-bold">{post.title}</span>
{/if}

