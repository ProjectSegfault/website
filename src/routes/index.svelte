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
