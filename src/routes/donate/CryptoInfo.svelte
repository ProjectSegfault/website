<script lang="ts">
	export let name: string = "";
	export let address: string = "";
	export let qr: string = "";
</script>

{#if address}
	<details class="p-0">
		<summary>Address</summary>
		<code class="break-words whitespace-normal">{address}</code>
	</details>
{/if}

{#if qr}
	<details class="p-0">
		<summary>QR code</summary>
		<a
			href="/qr/{qr}"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="/qr/{qr}"
				alt="QR code to {name} address"
				class="mt-2"
			/>
		</a>
	</details>
{/if}
