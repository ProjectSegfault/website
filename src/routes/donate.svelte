<script lang="ts">
    import MoneroQR from "$lib/images/Monero.png";

	import { t } from '$lib/translations';
    import * as global from "../i18n/_global.json";
</script>

<h1>{$t('common.DONATE_TITLE')}</h1>

<h2>{$t('common.DONATE_DESCRIPTION')}</h2>

<h1>{$t('common.DONATE_PLEASE_DO')}</h1>

<p>{$t('common.DONATE_EXPLANATION')}</p>

<h1>{$t('common.DONATE_OK_SURE')}</h1>

<div class="monero">
    <span>{global.MONERO}: <code>47L7Qsto7XcifY3CdG18ySe5Tt83kpFLDLve9jQwbc9taPBLNGv6ZrJNUKpMG9Nj9zHgCZ4FQMSyt75e8Jvx12JFLtJyFdA</code></span>
    <img src={MoneroQR} alt="Monero Qr Code">
</div>

<style>
    .monero {
        display: flex;
        align-items: center;
    }

    .monero > img {
        margin-left: 8px;
    }

    @media only screen and (max-width: 930px) {
        .monero {
            flex-direction: column;
            align-items: flex-start;
        }

        .monero > img {
            margin-left: 0;
            margin-top: 8px;
        }
    }
</style>
