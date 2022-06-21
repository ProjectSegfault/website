<script lang="ts">
    import MoneroQR from "$lib/images/Monero.png";

	import { t } from '$lib/translations';
</script>

<h1>{$t('common.DONATETITLE')}</h1>

<h2>{$t('common.DONATEDESCRIPTION')}</h2>

<h1>{$t('common.DONATEPLEASEDO')}</h1>

<p>{$t('common.DONATEEXPLANATION')}</p>

<h1>{$t('common.DONATEOKSURE')}</h1>

<div class="monero">
    <span>Monero: <code>47L7Qsto7XcifY3CdG18ySe5Tt83kpFLDLve9jQwbc9taPBLNGv6ZrJNUKpMG9Nj9zHgCZ4FQMSyt75e8Jvx12JFLtJyFdA</code></span>
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
