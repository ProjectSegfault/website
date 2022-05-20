<script context="module">
    export const prerender = true;
    export const hydrate = true;
</script>
<script lang="ts">
	import "../assets/animation.css";
	import ProjectSegfaultLogo from "../assets/images/projectsegfault1.png";
    export let responsive;
    function showResponsive() {
        let x = document.getElementById("navbarpieceofshitfuckihatethis");
        let navbarClasses = x.classList;
        let navbarClassesString = navbarClasses.toString();
        const svelteclassthing = navbarClasses.item(2)
        console.log(navbarClasses);
        if (x.className === "center navbarpieceofshitfuckihatethis", svelteclassthing) {
            console.log("Shit");
            responsive = true;
        }

        if (navbarClassesString.includes("responsive")){
            console.log("Piss");
            responsive = false;
        }
    };
</script>
<header id="navigationBar" class="navigvationBar">
    <a href="/">
    <img src={ProjectSegfaultLogo} id="ProjectSegfaultLogoHeader" alt="Logo."/>
    </a>
    <a href="/" class="text-flicker-in-glow" style="color: #ce1717">Project <span style="color: #00d4aa">Segfault</span></a> 
    <a href="{'#'}" class="button" id="MenuButton" on:click={showResponsive}>Menu</a>
   <div class="center navbarpieceofshitfuckihatethis" id="navbarpieceofshitfuckihatethis" class:responsive={responsive}>
    <a href="https://instances.projectsegfau.lt" class="button">Instances & Gameservers </a>
    
    
    
    <a href="/minecraft" class="button">Minecraft</a>

    <a href="/donate" class="button">Donate</a>
    
    <a href="/faq" class="button">FAQ</a>

    <a href="/members" class="button">Members</a>

    <a href="/contact" class="button">Contact</a>
   </div>
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