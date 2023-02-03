<script lang="ts">
	export let address: string = "";
	export let qr: string = "";
</script>

{#if address}
	<details class="p-0">
		<summary>Address</summary>
		<code class="break-words whitespace-normal"
			>49burTxWHyqa9NkkC9PV33D79PrwARMq8aic4XezTx36i66qyLA3afYXicycTTA5st93CV5Rr9AGkKpeE5GPueRN2PkfFQN</code
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
