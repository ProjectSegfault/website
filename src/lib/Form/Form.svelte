<script lang="ts">
	export let action: string;
	export let method: string;
	export let id: string;
</script>

<form {action} {method} {id}>
	<slot />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: fit-content;
	}

	:global(.form-button) {
		background-color: var(--secondary);
		border: none;
		border-radius: 10px;
		padding: 0.5rem;
		cursor: pointer;
		color: var(--text);
		font-family: var(--font-primary);
		text-decoration: none;
	}

	:global(.form-button:not(select):hover) {
		background-color: var(--accent);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	:global(.form-textbox) {
		background-color: var(--secondary);
		color: var(--text);
		border-radius: 10px;
		border: none;
		padding: 0.5rem;
		font-family: var(--font-primary);
		outline: none;
	}
</style>
