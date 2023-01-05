<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from "svelte-vertical-timeline";
	import Hero from "$lib/Hero.svelte";
</script>

<svelte:head>
	<title>Timeline | Project Segfault</title>
	<meta
		name="description"
		content="Timeline of Project Segfault's history."
	/>
</svelte:head>

<Hero marginTop="4">
	<h1 class="text-5xl font-800">
		A timeline of <span class="text-accent">Project Segfault</span>'s
		history
	</h1>
</Hero>

<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2020</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Terrific Tea Studios is formed</h3>
			<p>
				While not intended to be as the beginning of the founding of
				Project Segfault, it grouped 3 core team members together:
				Odyssey, Midou and Devnol, with some other people. This was all
				of us' first attempt at making an organization that focuses on
				computers. It primarily focused on development of products. This
				organization was ultimately killed in February 2021 when Odyssey
				brutally murdered it by abusing a backdoor in it's Discord bot,
				Cytrus-RE.
			</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>January 2021</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Neutron Technologies is formed</h3>
			<p>
				This was our second attempt at an organization, attempting to
				not follow our previous mistakes. While it went nicely at first,
				it eventually got to the point where Devnol (the current
				organizer) decided he had better things to do (not really) and
				left. From there, things went south and eventually we just
				deleted the entire organization's Discord (we werent convinced
				of Matrix at this time.). Since we had access to some hardware,
				this was supposed to be focused on making backend stuff rather
				than desktop apps.
			</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>Somewhere in July 2021?</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>MrLeRien opens a small homeserver with the help of Midou</h3>
			<p>
				This eventually formed a nice little (primarily focused on
				hosting) project called mutahar.rocks. Here, the duo focused on
				hosting anything they could on a Core 2 Duo HP machine with 8GB
				of RAM running Arch Linux. This alongside a small VPS they
				already had.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>Probably October 2021</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Mutahar.rocks obtained a powerful server</h3>
			<p>
				MrLeRien's dad's work had an unused Hitachi Compute Rack with
				320GB of ram and two decade-old Xeons. Once he got his hands on
				the server, mutahar.rocks started hosting more stuff.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>December 2021</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Odyssey joins Mutahar.rocks</h3>
			<p>
				At this point, it wasn't "official", but he did some work for
				them (like try to make a website, which eventually got lost and
				never found), and that's about it.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>February 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Mutahar.rocks started hosting gameservers.</h3>
			<p>
				Odyssey was in charge of most of them, which made him an
				official member of Mutahar.rocks. We primarily focused on
				hosting Source game servers, for example Garry's Mod. We also
				hosted a Minecraft server to a couple of... annoying people. I'm
				glad they're out of my life now.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>April 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Mutahar.rocks' main server was forced to shut down.</h3>
			<p>
				Eventually, after many months and pointless arguments with his
				dad, MrLeRien decided to give up on fighting with his dad to
				keep the server online. I don't remember exactly when, but I had
				to make an announcement in the middle of a class to tell people
				what was going on. Not fun.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>April 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>
				Devnol comes in and joins Mutahar.rocks with his server, Helios.
			</h3>
			<p>
				When he joined, we decided that this was huge for Mutahar.rocks
				and we decided it was time to rebrand... This is when
				Mutahar.rocks became Project Segfault. Same thing - just a bit
				more professional.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>July 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Months later, 3 new members, we're better than ever.</h3>
			<p>
				We decided to get some new members. First, we started by getting
				someone who likes to do frontend development, Akis. Then, we got
				an amazing sysadmin who goes by the alias "openssl_rand". He
				does a lot of cool stuff for us, and he is very dedicated. Then
				we also decided that we needed backups, and then one of our
				friends told us he could help us with that. His name is
				Stephenvk. We also decided to just get better.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>August 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>
				Project Segfault decides to expand and now develops software.
			</h3>
			<p>
				This started after Odyssey decided to work on Segfautils, an API
				for Project Segfault. Midou plans to start a huge project in the
				near future together with the team that can help people with
				multiple servers.
			</p>
		</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>September 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={"background-color: #fff; "} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3>Resignation of members and the start of a new era.</h3>
			<p>
				Devnol, Odyssey and akisblack resigned from the team leading to
				a serious loss of manpower. To combat this, we decided to shut
				down some of our unused instances as well as the ones that were
				painful to deal with. 
			</p>
		</TimelineContent>
	</TimelineItem>
</Timeline>
