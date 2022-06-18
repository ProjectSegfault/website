---
title: Donate to Project Segfault
description: Our donation methods
---
<script lang="ts">
    import MoneroQR from "$lib/images/Monero.png";
</script>

# {title}
## {description}

# please do
If you donate, we will be more motivated to work on the server and host more stuff and maybe even get more hardware. I really recommend you donate any spare money you have if you enjoy or use our services on a daily basis.

# yeah sure I'll donate. links?


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