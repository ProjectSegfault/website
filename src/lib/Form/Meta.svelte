<script lang="ts">
	export let inputType: string = "";
	export let inputPlaceholder: string = "";
	export let selectType: string = "";
</script>

<div
	class="flex items-center flex-row gap-4 children:w-[50%] lt-sm:(flex-col items-start justify-center children:w-[calc(100%-1rem)])"
>
	<input
		type={inputType}
		name={inputType}
		class="form-textbox"
		placeholder={inputPlaceholder}
		required
	/>
	<select
		name={selectType}
		required
		class="form-button"
	>
		<slot />
	</select>
</div>

<style>
	@media screen and (max-width: 640px) {
		div > :nth-child(2) {
			width: 100%;
		}
	}
</style>
