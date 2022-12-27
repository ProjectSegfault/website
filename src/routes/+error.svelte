<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<span class="italic">The fetch request to the API probably failed, please contact us on Matrix.</span>