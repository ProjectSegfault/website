<script lang="ts">
	import { t } from "$lib/translations";
	import * as global from "../i18n/_global.json";
</script>

<svelte:head>
	<title>{$t("common.FAQ_TITLE")} | {global.NAME}</title>
</svelte:head>

<h1>{$t("common.FAQ_TITLE")}</h1>

<h2>{$t("common.FAQ_OWNER_TITLE")}</h2>
<p>{$t("common.FAQ_OWNER")}</p>

<h2>{$t("common.FAQ_TOXICITY_TITLE")}</h2>
<p>
	{$t("common.FAQ_TOXICITY_1")}
	<a href="https://matrix.to/#/#support:projectsegfau.lt"
		>#support:projectsegfau.lt</a
	>
	{$t("common.FAQ_TOXICITY_2")}
</p>

<h2>{$t("common.FAQ_TRUST_TITLE")}</h2>
<p>
	{$t("common.FAQ_TRUST_1")}
	<strong>{$t("common.FAQ_TRUST_2")}</strong>
	{$t("common.FAQ_TRUST_3")}
</p>

<h2>{$t("common.FAQ_CONTACT_TITLE")}</h2>
<p>
	{$t("common.FAQ_CONTACT")}
	<a href="/contact">{$t("common.NAVBAR_CONTACT")}</a>
	.
</p>
