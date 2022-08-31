<script lang="ts">
	export let inputType: string;
	export let inputPlaceholder: string;
	export let selectType: string;
</script>

<div class="meta">
	<input
		type={inputType}
		name={inputType}
		class="form-textbox"
		placeholder={inputPlaceholder}
		required
	/>
	<select name={selectType} required class="form-button">
		<slot />
	</select>
</div>

<style>
	.meta {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 1rem;
	}

	.meta > * {
		width: 50%;
	}

	@media screen and (max-width: 450px) {
		.meta {
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		.meta > * {
			width: calc(100% - 1rem);
		}

		.meta > *:nth-child(2) {
			width: 100%;
		}
	}
</style>
