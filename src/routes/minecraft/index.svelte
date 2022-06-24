<script>
	import { t } from "$lib/translations";
	import * as global from "../../i18n/_global.json";
</script>

<svelte:head>
	<title>{$t("common.MINECRAFT_TITLE")} | {global.NAME}</title>
</svelte:head>

<h1>{$t("common.MINECRAFT_TITLE")}</h1>

<h1>{$t("common.MINECRAFT_DESCRIPTION")}</h1>

<p>{$t("common.MINECRAFT_SMP")}</p>

<p>{$t("common.MINECRAFT_JOIN")}</p>
<a href={global.DISCORD_INVITE}>{$t("common.MINECRAFT_DISCORD")}</a>

<h2>{$t("common.MINECRAFT_RULES")}</h2>

<p>{$t("common.MINECRAFT_RULE_1")}</p>
<p>{$t("common.MINECRAFT_RULE_2")}</p>
<p>{$t("common.MINECRAFT_RULE_3")}</p>
<p>{$t("common.MINECRAFT_RULE_4")}</p>

<h2>{$t("common.MINECRAFT_IP")}</h2>

<p><b>Java</b>: {global.MINECRAFT_JAVA_IP}</p>

<p><b>Bedrock</b>: {global.MINECRAFT_BEDROCK_IP}</p>

<i>{$t("common.MINECRAFT_NOTE_1")}</i>

<br />

<i>{$t("common.MINECRAFT_NOTE_2")}</i>

<h2>{$t("common.MINECRAFT_LINKS")}</h2>

<a href="https://map.mc.projectsegfau.lt">Dynmap</a>

<a href="https://apps.apple.com/us/app/mc-server-connector/id1548251304"
	>{$t("common.MINECRAFT_MC_IOS")}</a
>

<a
	href="https://play.google.com/store/apps/details?id=com.smokiem.mcserverconnector&hl=no&gl=US"
	>{$t("common.MINECRAFT_MC_ANDROID")}</a
>

<h2>{$t("common.MINECRAFT_CLIENT_SIDE_MODS")}</h2>

<a href="/minecraft/client-side-mods"
	>{$t("common.MINECRAFT_CLIENT_SIDE_MODS_URL")}</a
>

<h2>{$t("common.MINECRAFT_PLUGIN_LIST_TITLE")}</h2>

<p>{$t("common.MINECRAFT_PLUGIN_LIST_NOTE")}</p>

<ul>
	<li>BlockLocker</li>
	<li>CoreProtect</li>
	<li><a href="https://map.mc.projectsegfau.lt">Dynmap</a></li>
	<li>EssentialsX (EssentialsXDiscord, EssentialsXGeoIP)</li>
	<li>Geyser & Floodgate</li>
	<li>LuckPerms</li>
	<li>
		mcMMO <a href="https://dl.odyssey346.dev/Software/mcMMO.jar"
			>{$t("common.MINECRAFT_MCMMO")}</a
		>
	</li>
	<li>TabTPS</li>
	<li>Vault</li>
	<li>ViaVersion ({$t("common.MINECRAFT_VIAVERSION_NOTE")})</li>
	<li>PlugMan</li>
	<li>CombatLogX</li>
	<li>Simple Voice Chat</li>
</ul>
