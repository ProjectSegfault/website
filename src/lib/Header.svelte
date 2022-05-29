<script context="module">
    export const prerender = true;
    export const hydrate = true;
</script>
<script lang="ts">
	import "../assets/animation.css";
	import ProjectSegfaultLogo from "../assets/images/projectsegfault1.png";
    let showMenu = false
    let innerWidth
    let mobile
    $: mobile = innerWidth < 800
</script>

<svelte:window bind:innerWidth />

<header id="navigationBar" class="navigvationBar">
    <a href="/">
        <img src={ProjectSegfaultLogo} id="ProjectSegfaultLogoHeader" alt="Logo."/>
    </a>
    <a href="/" class="text-flicker-in-glow" style="color: #ce1717">Project <span style="color: #00d4aa">Segfault</span></a>
    {#if mobile}
        <a href="{'#'}" class="button" id="MenuButton" on:click="{() => showMenu = !showMenu}">Menu</a>
    {/if}
   {#if !mobile || showMenu}
   <div class="center navbar" id="navbar" class:responsive={mobile}>
    <a href="https://instances.projectsegfau.lt" class="button">Instances & Gameservers </a>
    
    <a href="/minecraft" class="button">Minecraft</a>

    <a href="/donate" class="button">Donate</a>
    
    <a href="/faq" class="button">FAQ</a>

    <a href="/members" class="button">Members</a>

    <a href="/contact" class="button">Contact</a>
   </div>
   {/if}
</header>

<style>
    header {
        background-color: #252525;
        border: solid #252525;
        border-width: 1em;
    }
    #ProjectSegfaultLogoHeader {
        /*Here goes anything to do with the header logo*/
        border-radius: 16px;
        width: 32px;
	    vertical-align: middle;
	    display: inline-block;
    }
    .text-flicker-in-glow {
	    opacity: 1;
        -webkit-animation: text-flicker-in-glow 3000ms both;
	    animation: text-flicker-in-glow 3000ms both;
    }
    @media screen and (prefers-reduced-motion) {
	    .text-flicker-in-glow {
	    	opacity: 1;
            animation: none;
       }
    }
</style>