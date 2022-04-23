<script lang="ts">
	import css from "../assets/animation.css";
	import ProjectSegfaultLogo from "../assets/images/projectsegfault1.png";
</script>
<header>
    <img src={ProjectSegfaultLogo} id="ProjectSegfaultLogoHeader" alt="project segfault's logo." />
    <a href="/" class="text-flicker-in-glow" style="color: #ce1717">Project <span style="color: #00d4aa">Segfault</span></a> 
   <div class="center">
    <a href="/instances" class="button">Instances</a>
    
    <a href="/gameservers" class="button">Games</a>
    
    <a href="/donate" class="button">Donate</a>
    
    <a href="/minecraft" class="button">Minecraft</a>
    
    <a href="/contact" class="button">Contact</a>
   </div>
</header>

<style>
    header {
        background-color: #252525;
        border: solid #252525;
        border-width: 1em;
        border-radius: 8px;
    }
    #ProjectSegfaultLogoHeader {
        /*Here goes anything to do with the header logo*/
        border-radius: 16px;
        width: 32px;
	    vertical-align: middle;
	    display: inline-block;
    }
    .center {
	    text-align: center;
    }
    .text-flicker-in-glow {
	    opacity:1;
        -webkit-animation: text-flicker-in-glow 3000ms both;
	    animation: text-flicker-in-glow 3000ms both;
    }
    @media screen and (prefers-reduced-motion: no-preference) {
	.text-flicker-in-glow {
		opacity:1;
	-webkit-animation: text-flicker-in-glow 1000ms both;
	    animation: text-flicker-in-glow 1000ms both;    }
    }
</style>
