<script lang="ts">
	export let address: string = "";
	export let qr: string = "";
</script>

{#if address}
	<details class="p-0">
		<summary>Address</summary>
		<code class="break-words whitespace-normal"
			>{address}</code
		>
	</details>
{/if}

{#if qr}
	<details class="p-0">
		<summary>QR code</summary>
		<img
			src="/qr/{qr}"
			alt="QR code"
			class="mt-2"
		/>
	</details>
{/if}
