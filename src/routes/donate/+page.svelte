<script lang="ts">
	import CryptoInfo from "./CryptoInfo.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>{data.title}</h1>

<h2>What we do with donations</h2>

<p>
	These donations primarily help us pay for our VPSes, domain names and other
	expenses related to crucial infrastructure we have to maintain. We also
	sometimes donate to developers who maintain software we rely heavily on.
</p>

<h2>Donation methods</h2>

<p>
	You can currently donate by credit card through <a
		href="https://liberapay.com">Liberapay</a
	>, UPI (for Indians) and cryptocurrencies.
</p>

<h3>Credit card</h3>
<a
	href="https://liberapay.com/ProjectSegfault/donate"
	class="button !bg-amber !text-black w-fit"
	><div class="va-icon i-simple-icons:liberapay" />
	Liberapay</a
>

<h3>UPI</h3>
<CryptoInfo
	address="projectsegfault@icici"
	qr="UPI.png"
/>

<h3>Cryptocurrencies</h3>
<p>
	You can use <a href="https://projectsegfau.lt">projectsegfau.lt</a> as a
	crypto wallet address in supported OpenAlias clients such as
	<a href="https://mymonero.com">MyMonero</a>,
	<a href="https://electrum.org">Electrum</a>
	and <a href="https://electrum-ltc.org">Electrum-LTC</a>.
</p>

<p class="text-text font-bold mt-4">
	<i
		class="va-icon i-simple-icons:monero inline-block text-[#F60]"
		aria-hidden="true"
	/>
	Monero
</p>

<CryptoInfo
	name="Monero"
	address="47L7Qsto7XcifY3CdG18ySe5Tt83kpFLDLve9jQwbc9taPBLNGv6ZrJNUKpMG9Nj9zHgCZ4FQMSyt75e8Jvx12JFLtJyFdA"
	qr="Monero.png"
/>

<p class="text-text font-bold mt-4">
	<i
		class="va-icon i-simple-icons:bitcoin inline-block text-[#F7931A]"
		aria-hidden="true"
	/>
	Bitcoin
</p>

<CryptoInfo
	name="Bitcoin"
	address="bc1qrc8ywgp95a6p3zausp4nff70qzstp6h8z86sxd"
	qr="Bitcoin.png"
/>

<p class="text-text font-bold mt-4">
	<i
		class="va-icon i-simple-icons:litecoin inline-block text-[#A6A9AA]"
		aria-hidden="true"
	/>
	Litecoin
</p>

<CryptoInfo
	name="Litecoin"
	address="ltc1qn3ald586h2ntt0n3zkvwsmju2e5vndgtvvgatj"
	qr="Litecoin.png"
/>

<style>
	.va-icon {
		vertical-align: -0.125em;
	}
</style>
