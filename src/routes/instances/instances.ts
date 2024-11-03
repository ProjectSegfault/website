interface Instances {
	name: string;
	data: Instance[];
}

interface Instance {
	name: string;
	description: string;
	geo?: string;
	short_geo?: string;
	eu?: string;
	short_eu?: string;
	us?: string;
	short_us?: string;
	in?: string;
	short_in?: string;
	tor?: string;
	icon?: string;
}

const instances: Instances[] = [
	{
		name: "Privacy front-ends",
		data: [
			{
				name: "Invidious",
				description: "A front-end for YouTube.",
				eu: "https://invidious.projectsegfau.lt/",
				short_eu: "https://i.psf.lt/",
				us: "https://inv.us.projectsegfau.lt/",
				short_us: "https://i.us.psf.lt/",
				in: "https://inv.in.projectsegfau.lt/",
				short_in: "https://i.in.psf.lt/",
				tor: "http://inv.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/invidious.svg"
			},
			{
				name: "Piped",
				description: "Another front-end for YouTube.",
				eu: "https://piped.projectsegfau.lt/",
				short_eu: "https://pi.psf.lt/",
				us: "https://piped.us.projectsegfau.lt/",
				short_us: "https://pi.us.psf.lt/",
				in: "https://piped.in.projectsegfau.lt/",
				short_in: "https://piped.in.projectsegfau.lt/",
				icon: "/icons/piped.svg"
			},
			{
				name: "Libreddit",
				description: "A front-end for Reddit.",
				geo: "https://libreddit.projectsegfau.lt/",
				short_geo: "https://lr.psf.lt/",
				eu: "https://libreddit.eu.projectsegfau.lt/",
				short_eu: "https://lr.eu.psf.lt/",
				us: "https://libreddit.us.projectsegfau.lt/",
				short_us: "https://lr.us.psf.lt/",
				in: "https://libreddit.in.projectsegfau.lt/",
				short_in: "https://lr.in.psf.lt/",
				tor: "http://libreddit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/libreddit.png"
			},
			{
				name: "Nitter",
				description: "A front-end for Twitter.",
				geo: "https://nitter.projectsegfau.lt/",
				short_geo: "https://n.psf.lt/",
				eu: "https://nitter.eu.projectsegfau.lt/",
				short_eu: "https://n.eu.psf.lt/",
				us: "https://nitter.us.projectsegfau.lt/",
				short_us: "https://n.us.psf.lt/",
				in: "https://nitter.in.projectsegfau.lt/",
				short_in: "https://n.in.psf.lt/",
				tor: "http://nitter.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/nitter.png"
			},
			{
				name: "AnonymousOverflow",
				description: "A front-end for StackOverflow.",
				geo: "https://overflow.projectsegfau.lt/",
				short_geo: "https://o.psf.lt/",
				eu: "https://overflow.eu.projectsegfau.lt/",
				short_eu: "https://o.eu.psf.lt/",
				us: "https://overflow.us.projectsegfau.lt/",
				short_us: "https://o.us.psf.lt/",
				in: "https://overflow.in.projectsegfau.lt/",
				short_in: "https://o.in.psf.lt/",
				tor: "http://overflow.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/anonymousoverflow.png"
			},
			{
				name: "BreezeWiki",
				description: "A front-end for Fandom.",
				geo: "https://bw.projectsegfau.lt/",
				short_geo: "https://bw.psf.lt/",
				eu: "https://bw.eu.projectsegfau.lt/",
				short_eu: "https://bw.eu.psf.lt/",
				us: "https://bw.us.projectsegfau.lt/",
				short_us: "https://bw.us.psf.lt/",
				in: "https://bw.in.projectsegfau.lt/",
				short_in: "https://bw.in.psf.lt/",
				tor: "http://breezewiki.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/breezewiki.svg"
			},
			{
				name: "GotHub",
				description: "A front-end for GitHub.",
				geo: "https://gothub.projectsegfau.lt/",
				short_geo: "https://gh.psf.lt/",
				eu: "https://gothub.eu.projectsegfau.lt/",
				short_eu: "https://gh.eu.psf.lt/",
				us: "https://gothub.us.projectsegfau.lt/",
				short_us: "https://gh.us.psf.lt/",
				in: "https://gothub.in.projectsegfau.lt/",
				short_in: "https://gh.in.psf.lt/",
				tor: "http://gothub.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/gothub.svg"
			},
			{
				name: "HyperPipe",
				description: "A front-end for YT Music.",
				geo: "https://hyperpipe.projectsegfau.lt/",
				short_geo: "https://hp.psf.lt/",
				eu: "https://hyperpipe.eu.projectsegfau.lt/",
				short_eu: "https://hp.eu.psf.lt/",
				us: "https://hyperpipe.us.projectsegfau.lt/",
				short_us: "https://hp.us.psf.lt/",
				in: "https://hyperpipe.in.projectsegfau.lt/",
				short_in: "https://hp.in.psf.lt/",
				icon: "/icons/hyperpipe.svg"
			},
			{
				name: "Rimgo",
				description: "A front-end for Imgur.",
				geo: "https://rimgo.projectsegfau.lt/",
				short_geo: "https://rg.psf.lt/",
				eu: "https://rimgo.eu.projectsegfau.lt/",
				short_eu: "https://rg.eu.psf.lt/",
				us: "https://rimgo.us.projectsegfau.lt/",
				short_us: "https://rg.us.psf.lt/",
				in: "https://rimgo.in.projectsegfau.lt/",
				short_in: "https://rg.in.psf.lt/",
				tor: "http://rimgo.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/rimgo.png"
			},
			{
				name: "Priviblur",
				description: "A front-end for Tumblr.",
				geo: "https://priviblur.projectsegfau.lt/",
				short_geo: "https://pb.psf.lt/",
				eu: "https://priviblur.eu.projectsegfau.lt/",
				short_eu: "https://pb.eu.psf.lt/",
				us: "https://priviblur.us.projectsegfau.lt/",
				short_us: "https://pb.us.psf.lt/",
				in: "https://priviblur.in.projectsegfau.lt/",
				short_in: "https://pb.in.psf.lt/",
				tor: "http://priviblur.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
			},
			{
				name: "Shoelace",
				description: "A front-end for Threads.",
				geo: "https://lace.projectsegfau.lt/",
				short_geo: "https://l.psf.lt/",
				eu: "https://lace.eu.projectsegfau.lt/",
				short_eu: "https://l.eu.psf.lt/",
				us: "https://lace.us.projectsegfau.lt/",
				short_us: "https://l.us.psf.lt/",
				in: "https://lace.in.projectsegfau.lt/",
				short_in: "https://l.in.psf.lt/",
				tor: "http://lace.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/shoelace.svg"
			},
			{
				name: "Safetwitch",
				description: "A front-end for Twitch.",
				geo: "https://safetwitch.projectsegfau.lt/",
				short_geo: "https://tw.psf.lt/",
				eu: "https://safetwitch.eu.projectsegfau.lt/",
				short_eu: "https://tw.eu.psf.lt/",
				us: "https://safetwitch.us.projectsegfau.lt/",
				short_us: "https://tw.us.psf.lt/",
				in: "https://safetwitch.in.projectsegfau.lt/",
				short_in: "https://tw.in.psf.lt/",
				tor: "http://safetwitch.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/safetwitch.png"
			},
			{
				name: "Scribe",
				description: "A front-end for Medium.",
				geo: "https://scribe.projectsegfau.lt/",
				short_geo: "https://sc.psf.lt/",
				eu: "https://scribe.eu.projectsegfau.lt/",
				short_eu: "https://sc.eu.psf.lt/",
				us: "https://scribe.us.projectsegfau.lt/",
				short_us: "https://sc.us.psf.lt/",
				in: "https://scribe.in.projectsegfau.lt/",
				short_in: "https://sc.in.psf.lt/",
				tor: "http://scribe.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion"
			},
			{
				name: "Mozhi",
				description: "A front-end for many translation engines.",
				geo: "https://translate.projectsegfau.lt/",
				short_geo: "https://tl.psf.lt/",
				eu: "https://translate.eu.projectsegfau.lt/",
				short_eu: "https://tl.eu.psf.lt/",
				us: "https://translate.us.projectsegfau.lt/",
				short_us: "https://tl.us.psf.lt/",
				in: "https://translate.in.projectsegfau.lt/",
				short_in: "https://tl.in.psf.lt/",
				tor: "http://translate.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/mozhi.svg"
			}
		]
	},
	{
		name: "Useful tools and services",
		data: [
			{
				name: "XMPP",
				description: "The universal messaging standard.",
				in: "https://wiki.projectsegfau.lt/XMPP",
				short_in: "https://w.psf.lt/XMPP",
				icon: "/icons/xmpp.svg"
			},
			{
				name: "XMPP Web",
				description: "Lightweight web chat client for XMPP.",
				in: "https://xmpp-web.projectsegfau.lt/",
				short_in: "https://x.psf.lt/"
			},
			{
				name: "SearXNG",
				description: "A private metasearch engine.",
				eu: "https://search.projectsegfau.lt/",
				short_eu: "https://s.psf.lt/",
				us: "https://search.us.projectsegfau.lt/",
				short_us: "https://s.us.psf.lt/",
				in: "https://search.in.projectsegfau.lt/",
				short_in: "https://s.in.psf.lt/",
				tor: "http://search.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/searxng.svg"
			},
			{
				name: "FreshRSS",
				description:
					"A RSS Web Client you can use to read your feeds and sync them with your other devices.",
				in: "https://rss.projectsegfau.lt/",
				short_in: "https://rss.psf.lt/",
				tor: "http://rss.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/FreshRSS-logo.svg"
			},
			{
				name: "RSSBridge",
				description:
					"A bridge that allows you to generate RSS feeds for websites that don't have one.",
				in: "https://rssbridge.projectsegfau.lt/",
				short_in: "https://rb.psf.lt/",
				tor: "http://rssbridge.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/rssbridge-short.svg"
			},
			{
				name: "Gitea",
				description:
					"A web interface for Git. An alternative to GitHub.",
				in: "https://git.projectsegfau.lt/",
				short_in: "https://git.psf.lt/",
				tor: "http://git.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/gitea.svg"
			},
			{
				name: "Hedgedoc",
				description: "Collaborative Markdown notes.",
				in: "https://doc.projectsegfau.lt/",
				short_in: "https://d.psf.lt/",
				icon: "/icons/hedgedoc.svg"
			},
			{
				name: "Vikunja",
				description: "A task management platform.",
				in: "https://todo.projectsegfau.lt/",
				short_in: "https://vi.psf.lt/",
				tor: "http://todo.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/vikunja.png"
			},
			{
				name: "Jitsi",
				description: "An open-source video conferencing platform.",
				in: "https://jitsi.projectsegfau.lt/",
				short_in: "https://j.psf.lt/",
				icon: "/icons/jitsi.svg"
			},
			{
				name: "Vaultwarden",
				description: "An open-source password manager.",
				in: "https://pass.projectsegfau.lt/",
				short_in: "https://vw.psf.lt/",
				tor: "http://pass.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/vaultwarden.svg"
			},
			{
				name: "Healthchecks",
				description: "Simple and effective cron job monitoring.",
				in: "https://healthchecks.projectsegfau.lt/",
				short_in: "https://hc.psf.lt/",
				tor: "http://healthchecks.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/healthchecks.svg"
			},
			{
				name: "MediaWiki",
				description: "Our wiki.",
				in: "https://wiki.projectsegfau.lt/",
				short_in: "https://w.psf.lt/",
				tor: "http://wiki.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/mediawiki.svg"
			},
			{
				name: "Mirror of various distros",
				description: "Mirror of various Linux distributions.",
				in: "https://mirror.bom.albony.in"
			}
		]
	},
	{
		name: "Pubnix services",
		data: [
			{
				name: "Pubnix",
				description:
					"A Unix server open to the public for non-commercial recreational usage.",
				in: "https://p.projectsegfau.lt/",
				short_in: "https://p.psf.lt/",
				icon: "/icons/pubnix.png"
			},
			{
				name: "Public Authentik",
				description: "Authentik for signup to our services.",
				in: "https://auth.p.projectsegfau.lt/",
				icon: "/icons/authentik.svg"
			},
			{
				name: "Cockpit",
				description: "WebUI for users to access the pubnix services.",
				in: "https://cockpit.p.projectsegfau.lt/",
				tor: "http://cockpit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/cockpit.svg"
			},
			{
				name: "Soju",
				description: "A user-friendly IRC bouncer.",
				in: "https://wiki.projectsegfau.lt/IRC_Bouncer"
			},
			{
				name: "Gemini Proxy",
				description: "Access Gemini sites from the web.",
				in: "https://geminiproxy.p.projectsegfau.lt/",
				short_in: "https://gp.p.psf.lt/",
				tor: "http://geminiproxy.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion"
			}
		]
	},
	{
		name: "Invite-only services",
		data: [
			{
				name: "MailU",
				description: "Our mail server and webmail.",
				in: "https://mail.projectsegfau.lt/",
				icon: "/icons/mailu.png"
			},
			{
				name: "SimpleLogin",
				description: "An open-source email alias creator/manager",
				eu: "https://sl.projectsegfau.lt/",
				short_eu: "https://sl.psf.lt/",
				icon: "/icons/simplelogin.svg"
			}
		]
	}
];

export default instances;
