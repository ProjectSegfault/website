<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	export let form: ActionData;
	export let data: PageData;
</script>

<h1>{data.title}</h1>

<p>Our registration form is currently under maintanence :). Please <a href=/contact>Contact us</a> to get a new account!</p>
<p>Sorry for the inconvenience!</p>

<style>
	form > div {
		@apply flex flex-col items-start gap-2 w-fit;
	}
	form > div > label {
		@apply text-xl font-semibold;
	}
	form > div > input,
	form > div > textarea,
	form > button {
		@apply w-110 lt-sm\:w-70 px-2 py-1 bg-secondary rounded flex items-center gap-2 text-lg;
	}
</style>
