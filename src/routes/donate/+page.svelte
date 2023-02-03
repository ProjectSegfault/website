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
	sometimes donate to developers who maintain software we rely heavily on such
	as our authentication provider.
</p>

<h2>Donation methods</h2>

<p>
	You can currently donate by credit card through <a
		href="https://liberapay.com">Liberapay</a
	> and cryptocurrencies.
</p>

<h3>Credit card</h3>
<a
	href="https://liberapay.com/ProjectSegfault/donate"
	class="button !bg-amber !text-black w-fit"
	><div class="i-simple-icons:liberapay" />
	 Liberapay</a
>

<h3>Cryptocurrencies</h3>
<p>
	You can use <a href="https://projectsegfau.lt">projectsegfau.lt</a> as a
	crypto wallet address in supported OpenAlias clients such as
	<a href="https://mymonero.com">MyMonero</a>,
	<a href="https://electrum.org">Electrum</a>
	and <a href="https://electrum-ltc.org">Electrum-LTC</a>.
</p>

<h4>Monero</h4>

<CryptoInfo
	address="47L7Qsto7XcifY3CdG18ySe5Tt83kpFLDLve9jQwbc9taPBLNGv6ZrJNUKpMG9Nj9zHgCZ4FQMSyt75e8Jvx12JFLtJyFdA"
	qr="Monero.png"
/>

<h4>Bitcoin</h4>

<CryptoInfo
	address="bc1qrc8ywgp95a6p3zausp4nff70qzstp6h8z86sxd"
	qr="Bitcoin.png"
/>

<h4>Litecoin</h4>

<CryptoInfo
	address="ltc1qn3ald586h2ntt0n3zkvwsmju2e5vndgtvvgatj"
	qr="Litecoin.png"
/>
