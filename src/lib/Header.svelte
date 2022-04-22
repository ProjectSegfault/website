<script lang="ts">
    import ProjectSegfaultLogo from "../assets/images/projectsegfault1.png";
</script>
<header>
    <img src={ProjectSegfaultLogo} id="ProjectSegfaultLogoHeader" alt="Why is this not loading? Anyway, project segfault's logo." />
    <a href="/" style="color: #ce1717">Project</a> <a href="/" style="color: #00d4aa">Segfault</a>
	
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
</style>