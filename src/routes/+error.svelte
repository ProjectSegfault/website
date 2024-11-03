<script>
	import { page } from "$app/stores";
</script>

<h1>
	{$page.status}
	<p class="text-base font-normal mt-4">{$page.error?.message}</p>
</h1>
