<script lang="ts">
	export let id: string;
	export let name: string;
	export let placeholder: string;
</script>

<textarea
	{id}
	{name}
	rows="4"
	cols="25"
	required
	class="form-textbox resize-y"
	{placeholder}
/>
