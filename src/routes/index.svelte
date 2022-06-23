<script>
	import { t } from "$lib/translations";
	import * as global from "../i18n/_global.json";
</script>

<svelte:head>
	<title>{global.NAME}</title>
</svelte:head>

<h1>{global.NAME}</h1>

<div>
	<h2>{$t("common.INDEX_DESCRIPTION")}</h2>
	
	<h1>{$t("common.INDEX_WHAT")}</h1>
	<!-- Cause I feel the need to scream -->
	
	<p>{$t("common.INDEX_WHO_ARE_WE")}</p>
	
	<h1>{$t("common.INDEX_TELL_ME_MORE")}</h1>
	
	<p>{$t("common.INDEX_MORE_INFO")}</p>
</div>

<a
	href="https://www.abuseipdb.com/user/82331"
	title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
>
	<img
		src="https://www.abuseipdb.com/contributor/82331.svg"
		alt="AbuseIPDB Contributor Badge"
	/>
</a>

<style>
	div {
		padding-bottom: 150px;
	}

	img {
		width: 270px;
		background: var(--accent-primary); 
		padding: 0.5rem;
		position: absolute; 
		bottom: 80px;
		border-radius: 10px;
	}

	@media only screen and (max-width: 508px) {
		img {
			bottom: 160px;
		}
	}
</style>