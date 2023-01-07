<script lang="ts">
	export let inputType: string = "";
	export let inputName: string = "";
	export let inputPlaceholder: string = "";
	export let select: boolean = true;
	export let selectType: string = "";
	export let input2: boolean = false;
	export let input2Type: string = "";
	export let input2Name: string = "";
	export let input2Placeholder: string = "";
</script>

<div
	class="flex items-center flex-row gap-4 children:w-[50%] lt-sm:(flex-col items-start justify-center children:w-[calc(100%-1rem)])"
>
	<input
		type={inputType}
		name={inputName}
		class="form-textbox"
		placeholder={inputPlaceholder}
		required
	/>
	{#if input2}
		<input
			type={input2Type}
			name={input2Name}
			class="form-textbox"
			placeholder={input2Placeholder}
			required
		/>
	{/if}
	{#if select}
		<select
			name={selectType}
			required
			class="form-button"
		>
			<slot />
		</select>
	{/if}
</div>

{#if select}
	<style>
		@media screen and (max-width: 640px) {
			div > :nth-child(2) {
				width: 100%;
			}
		}
	</style>
{/if}
