<script lang="ts">
	import { t } from "$lib/translations";
	import * as global from "../i18n/_global.json";
	import { createEventDispatcher } from 'svelte';

	let dontDie;
	let shown = false;
	let dispatch = createEventDispatcher();
	export function show() {
        shown = !shown;
				dispatch('show', shown);
	}
</script>

<svelte:head>
	<title>{$t("common.CONTACT_TITLE")} | {global.NAME}</title>
</svelte:head>

<h1>{$t("common.CONTACT_TITLE")}</h1>

<h2>{$t("common.CONTACT_DESCRIPTION")}</h2>

<h1>{$t("common.CONTACT_OUR_EMAIL")}</h1>

<p><a href="mailto:{global.EMAIL}">{global.EMAIL}</a></p>
<p><i>{$t("common.CONTACT_EMAIL_SPAM")}</i></p>

<h1>{$t("common.CONTACT_PEOPLE")}</h1>

<div id="Active">
	<div class="parent">
		<div class="div1">{global.MIDOU}:</div>
		<a class="div2 matrixcolored" href={global.MIDOU_MATRIX_URL}>[Matrix]</a
		>
		<div class="div3" />
		<div class="div4">{global.MRLERIEN}:</div>
		<a class="div5 discordcolored" href={global.MRLERIEN_DISCORD_URL}
			>Discord</a
		>
		<div class="div6" />
		<div class="div7">{global.ODYSSEY}:</div>
		<a class="div8 matrixcolored" href={global.ODYSSEY_MATRIX_URL}
			>[Matrix]</a
		>
		<a class="div9 discordcolored" href={global.ODYSSEY_DISCORD_URL}
			>Discord</a
		>
		<div class="div10">{global.DEVNOL}:</div>
		<a class="div11 matrixcolored" href={global.DEVNOL_MATRIX_URL}
			>[Matrix]</a
		>
		<a class="div12 discordcolored" href={global.DEVNOL_DISCORD_URL}
			>Discord</a
		>
	</div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 16px;
		max-width: 50%;
		align-items: center;
	}

	/* this is a hack to make the grid work, need to improve this */

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div3 {
		grid-area: 1 / 3 / 2 / 4;
	}
	.div4 {
		grid-area: 2 / 1 / 3 / 2;
	}
	.div5 {
		grid-area: 2 / 2 / 3 / 3;
	}
	.div6 {
		grid-area: 2 / 3 / 3 / 4;
	}
	.div7 {
		grid-area: 3 / 1 / 4 / 2;
	}
	.div8 {
		grid-area: 3 / 2 / 4 / 3;
	}
	.div9 {
		grid-area: 3 / 3 / 4 / 4;
	}
	.div10 {
		grid-area: 4 / 1 / 5 / 2;
	}
	.div11 {
		grid-area: 4 / 2 / 5 / 3;
	}
	.div12 {
		grid-area: 4 / 3 / 5 / 4;
	}

	#Active a {
		border: none;
		border-radius: 10px;
		padding: 0.5rem;
		cursor: pointer;
		font-family: var(--font-primary);
		color: var(--secondary);
		text-decoration: none;
	}

	.matrixcolored {
		background-color: #fff;
	}

	.discordcolored {
		background-color: #5865f2;
		color: #fff !important;
	}
</style>
