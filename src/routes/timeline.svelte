<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
</script>

<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2020</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			/>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Terrific Tea Studios is formed</h3>
			<p>While not intended to be as the beginning of the founding of Project Segfault, it grouped 3 core team members together: Odyssey, Midou and Devnol, with some other people. This was all of us' first attempt at making an organization that focuses on computers. It primarily focused on development of products. This organization was ultimately killed in February 2021 when Odyssey brutally murdered it by abusing a backdoor in it's Discord bot, Cytrus-RE.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>January 2021</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			/>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Neutron Technologies is formed</h3>
			<p>This was our second attempt at an organization, attempting to not follow our previous mistakes. While it went nicely at first, it eventually got to the point where Devnol (the current organizer) decided he had better things to do (not really) and left. From there, things went south and eventually we just deleted the entire organization's Discord (we werent convinced of Matrix at this time.). Since we had access to some hardware, this was supposed to be focused on making backend stuff rather than desktop apps.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>Somewhere in July 2021?</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			/>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Midou meets a guy named MrLeRien</h3>
			<p>This eventually formed a nice little (primarily focused on hosting) project called mutahar.rocks. Here, the duo focused on hosting anything they could on a Core 2 Duo HP machine with 8GB of RAM that was running Arch Linux. Eventually, they decided to buy a couple of VPSes.</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>Probably October 2021</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
            <TimelineDot
				style={'background-color: #fff; '}
			/>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Mutahar.rocks obtained a powerful server</h3>
			<p>MrLeRien's dad's work had an unused Hitcachi Compute Rack with 320GB of ram and... I forgot the CPU, midou fill this in. Well, once MrLeRien got his hands on the Hitachi, mutahar.rocks started hosting more stuff.</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>December 2021</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			/>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Odyssey joins Mutahar.rocks</h3>
			<p>At this point, it wasn't "official", but he did some work for them (like try to make a website, which eventually got lost and never found), and that's about it.</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>February 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			/>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Mutahar.rocks started hosting gameservers.</h3>
			<p>Odyssey was in charge of most of them, which made him an official member of Mutahar.rocks. We primarily focused on hosting Source game servers, for example Garry's Mod. We also hosted a Minecraft server to a couple of... annoying people. I'm glad they're out of my life now.</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>April 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			>
			</TimelineDot>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Mutahar.rocks' main server was forced to shut down.</h3>
			<p>Eventually, after many months and pointless arguments with his dad, MrLeRien decided to give up on fighting with his dad to keep the server online. I don't remember exactly when, but I had to make an announcement in the middle of a class to tell people what was going on. Not fun.</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>April 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			/>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Devnol comes in and joins Mutahar.rocks with his server, Helios.</h3>
			<p>When he joined, we decided that this was huge for Mutahar.rocks and we decided it was time to rebrand... This is when Mutahar.rocks became Project Segfault. Same thing - just a bit more professional.</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>Now</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'background-color: #fff; '}
			>
			</TimelineDot>
            <TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Months later, 3 new members, we're better than ever.</h3>
			<p>We decided to get some new members. First, we started by getting someone who likes to do frontend development, Akis. Then, we got an amazing sysadmin who goes by the alias "openssl_rand". He does a lot of cool stuff for us, and he is very dedicated. Then we also decided that we needed backups, and then one of our friends told us he could help us with that. His name is Stephenvk. We also decided to just get better. This is just the beginning. We are going to take over the world, and become the NWO. Just kidding.</p>
		</TimelineContent>
	</TimelineItem>
</Timeline>