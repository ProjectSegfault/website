<script lang="ts">
	import { t } from "$lib/translations";
	import * as global from "../i18n/_global.json";
	import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
	title="{$t("common.FAQ_TITLE")} | {global.NAME}"
	description="{$t("common.FAQ_TITLE")}"
	canonical="https://projectsegfau.lt/faq/"
	openGraph={{
		url: "https://projectsegfau.lt/faq/",
		title: "{$t('common.FAQ_TITLE')} | {global.NAME}",
		description: $t("common.FAQ_TITLE")
	}}
/>

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
