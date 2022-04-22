<script lang="ts">
	import css from "../assets/animation.css";
	import ProjectSegfaultLogo from "../assets/images/projectsegfault1.png";
</script>
<header>
<<<<<<< HEAD
    <img src={ProjectSegfaultLogo} id="ProjectSegfaultLogoHeader" alt="Why is this not loading? Anyway, project segfault's logo." />
    <a href="/" class="text-flicker-in-glow" style="color: #ce1717">Project <span style="color: #00d4aa">Segfault</span></a> 
   <section class="center">
=======
    <img src={ProjectSegfaultLogo} id="ProjectSegfaultLogoHeader" alt="project segfault's logo." />
    <a href="/" style="color: #ce1717">Project</a> <a href="/" style="color: #00d4aa">Segfault</a>
	
   <div class="center">
>>>>>>> 3d08dbd2ae052f04c710f8cb955d8bbc313399ad
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
<<<<<<< HEAD
    .button {
  background-color: #00755e; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 10px;
  transition-duration: 0.4s;
  cursor: pointer;
    }
    .button:hover {
 	background-color: #00d4aa;
	color: black;
	border-radius: 2px;
	transform: translateY(-0.25em);
        box-shadow: 0 0.5em 0.5em -0.4em #00755e;
    }
    .button:active {
	    background-color: #4beacb;
	    box-shadow: 0 0.51em 0.51em 0.4em #00b591;
    }
    .text-flicker-in-glow {
	opacity:0;	    
    }
    .text-flicker-in-glow:hover {
	-webkit-animation: text-flicker-in-glow 900ms both;
	        animation: text-flicker-in-glow 900ms both;
}
</style>
=======
</style>
>>>>>>> 6b6ede9b9439d9c99cdadfc28641f5c33151e600
