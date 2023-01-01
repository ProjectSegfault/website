<script lang="ts">
	export let post: any;
</script>

<span>{post.plaintext.split(" ").slice(0, 20).join(" ") + "..."}</span>
<a href="/blog/{post.slug}">Read more...</a>