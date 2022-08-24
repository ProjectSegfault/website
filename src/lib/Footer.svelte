<script>
	import { page } from "$app/stores";
</script>

<footer>
	<div class="content">
		<span>© 2021 - present, Project Segfault <a href="/team">team</a></span>
		<span
			>Made with <a href="https://kit.svelte.dev/">SvelteKit</a> and
			released under the
			<a href="https://opensource.org/licenses/MIT/">MIT license</a
			>.</span
		>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		position: sticky;
		top: 100vh;
	}

	div.content {
		display: flex;
		align-items: center;
		flex-direction: column;
		border-top: 1px solid var(--grey);
		padding: 0.5rem;
	}

	div.content > * {
		color: var(--text);
		font-size: 13px;
		font-weight: 500;
		text-align: center;
	}
</style>
