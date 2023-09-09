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
	bp?: string;
	short_bp?: string;
	tor?: string;
	torBp?: string;
	i2p?: string;
	i2pBp?: string;
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
				bp: "https://inv.bp.projectsegfau.lt/",
				short_bp: "https://i.bp.psf.lt/",
				tor: "http://inv.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				torBp: "http://invbp.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfhqamc7k6htnumrvn4cwqqdoggeepj7u5viyimgnxg3gar72q.b32.i2p",
				i2pBp: "http://pjsfi2szfkb4guqzmfmlyq4no46fayertjrwt4h2uughccrh2lvq.b32.i2p",
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
				i2p: "http://pjsfkref7g66mji45kyccqnn5hmjtjp3cfodozabpyplj2rmv5sa.b32.i2p",
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
				i2p: "http://pjsfs4ukb6prmfx3qx3a5ef2cpcupkvcrxdh72kqn2rxc2cw4nka.b32.i2p",
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
				i2p: "http://pjsfk4xvekoc7wx4pteevp3q2wy7jmzlem7rvl74nx33zkdr4vyq.b32.i2p",
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
				tor: "http://scribe.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsflkkkcn33ahmzmpyq6idy2knkzh4atp7zaetqfsnenpyori6a.b32.i2p"
			},
			{
				name: "SimplyTranslate",
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
				icon: "/icons/simplytranslate.svg"
			},
			{
				name: "Teddit",
				description: "Another front-end for Reddit.",
				geo: "https://teddit.projectsegfau.lt/",
				short_geo: "https://t.psf.lt/",
				eu: "https://teddit.eu.projectsegfau.lt/",
				short_eu: "https://t.eu.psf.lt/",
				us: "https://teddit.us.projectsegfau.lt/",
				short_us: "https://t.us.psf.lt/",
				in: "https://teddit.in.projectsegfau.lt/",
				short_in: "https://t.in.psf.lt/",
				tor: "http://teddit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/teddit.png"
			}
		]
	},
	{
		name: "Useful tools and services",
		data: [
			{
				name: "Matrix",
				description:
					"An open network for secure, decentralized communication.",
				eu: "https://wiki.projectsegfau.lt/Matrix",
				short_eu: "https://w.psf.lt/Matrix",
				icon: "/icons/matrix.svg"
			},
			{
				name: "Element",
				description: "A feature-rich Matrix client.",
				eu: "https://chat.projectsegfau.lt/",
				short_eu: "https://el.psf.lt/",
				icon: "/icons/element.svg"
			},
			{
				name: "Hydrogen",
				description: "A lightweight Matrix client.",
				eu: "https://hydrogen.projectsegfau.lt/",
				short_eu: "https://h2.psf.lt/",
				icon: "/icons/hydrogen.svg"
			},
			{
				name: "Cinny",
				description: "An elegant Matrix client.",
				eu: "https://cinny.projectsegfau.lt/",
				short_eu: "https://cy.psf.lt/",
				icon: "/icons/cinny.svg"
			},
			{
				name: "XMPP",
				description: "The universal messaging standard.",
				eu: "https://wiki.projectsegfau.lt/XMPP",
				short_eu: "https://w.psf.lt/XMPP",
				icon: "/icons/xmpp.svg"
			},
			{
				name: "XMPP Web",
				description: "Lightweight web chat client for XMPP.",
				eu: "https://xmpp-web.projectsegfau.lt/",
				short_eu: "https://x.psf.lt/"
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
				i2p: "http://pjsfwklrellqoj275kzeu2tz4c3j5zktnqod56s7l5dc25ro3wgq.b32.i2p",
				icon: "/icons/searxng.svg"
			},
			{
				name: "Gitea",
				description:
					"A web interface for Git. An alternative to GitHub.",
				eu: "https://git.projectsegfau.lt/",
				short_eu: "https://git.psf.lt/",
				tor: "http://git.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfdrtv2465bisenvzhfvdleznx4arlih2hlnrhpzugailnm7iq.b32.i2p",
				icon: "/icons/gitea.svg"
			},
			{
				name: "Hedgedoc",
				description: "Collaborative Markdown notes.",
				eu: "https://doc.projectsegfau.lt/",
				short_eu: "https://d.psf.lt/",
				icon: "/icons/hedgedoc.svg"
			},
			{
				name: "LibreTranslate",
				description: "Free and open-source machine translation API.",
				eu: "https://libretranslate.projectsegfau.lt",
				short_eu: "https://lt.psf.lt/",
				icon: "/icons/libretranslate.png"
			},
			{
				name: "NextCloud",
				description: "Open-source file storage solution and alternative to the google suite.",
				eu: "https://nc.projectsegfau.lt/",
				short_eu: "https://nc.psf.lt/",
				icon: "/icons/nextcloud.svg"
			},
			{
				name: "Akkoma",
				description: "Federated microblogging platform.",
				eu: "https://social.projectsegfau.lt/",
				short_eu: "https://ak.psf.lt/",
				icon: "/icons/akkoma.png"
			},
			{
				name: "Kbin",
				description: "Federated Reddit alternative.",
				eu: "https://kbin.projectsegfau.lt/",
				short_eu: "https://kb.psf.lt/",
				icon: "/icons/kbin.svg"
			},
			{
				name: "Vikunja",
				description: "A task management platform.",
				eu: "https://todo.projectsegfau.lt/",
				short_eu: "https://vi.psf.lt/",
				tor: "http://todo.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfivs2sxudfy65kojxqophc6vqjqdr6woczy6hzaxvxvbj3bkq.b32.i2p",
				icon: "/icons/vikunja.png"
			},
			{
				name: "Jitsi",
				description: "An open-source video conferencing platform.",
				eu: "https://jitsi.projectsegfau.lt/",
				short_eu: "https://j.psf.lt/",
				icon: "/icons/jitsi.svg"
			},
			{
				name: "Vaultwarden",
				description: "An open-source password manager.",
				eu: "https://pass.projectsegfau.lt/",
				short_eu: "https://vw.psf.lt/",
				tor: "http://pass.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/vaultwarden.svg"
			},
			{
				name: "Plausible Analytics",
				description: "Analytics for our website.",
				eu: "https://analytics.projectsegfau.lt/",
				icon: "/icons/plausible.png"
			},
			{
				name: "Healthchecks",
				description: "Simple and effective cron job monitoring.",
				eu: "https://healthchecks.projectsegfau.lt/",
				short_eu: "https://hc.psf.lt/",
				tor: "http://healthchecks.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/healthchecks.svg"
			},
			{
				name: "MediaWiki",
				description: "Our wiki.",
				eu: "https://wiki.projectsegfau.lt/",
				short_eu: "https://w.psf.lt/",
				tor: "http://wiki.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/mediawiki.svg"
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
				eu: "https://p.projectsegfau.lt/",
				short_eu: "https://p.psf.lt/",
				icon: "/icons/pubnix.png"
			},
			{
				name: "Public Authentik",
				description: "Authentik for signup to our services.",
				eu: "https://auth.p.projectsegfau.lt/",
				icon: "/icons/authentik.svg"
			},
			{
				name: "Cockpit",
				description: "WebUI for users to access the pubnix services.",
				eu: "https://cockpit.p.projectsegfau.lt/",
				tor: "http://cockpit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/cockpit.svg"
			},
			{
				name: "Soju",
				description: "A user-friendly IRC bouncer.",
				eu: "https://wiki.projectsegfau.lt/IRC_Bouncer"
			},
			{
				name: "Gemini Proxy",
				description: "Access Gemini sites from the web.",
				eu: "https://geminiproxy.p.projectsegfau.lt/",
				short_eu: "https://gp.p.psf.lt/",
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
				eu: "https://mail.projectsegfau.lt/",
				icon: "/icons/mailu.png"
			},
			{
				name: "SimpleLogin",
				description: "An open-source email alias creator/manager",
				eu: "https://sl.projectsegfau.lt/",
				short_eu: "https://sl.psf.lt/",
				icon: "/icons/simplelogin.svg"
			},
			{
				name: "Dendrite",
				description:
					"Another Matrix server running on Project Segfault's India node!",
				eu: "https://w.psf.lt/Matrix#Dendrite",
				icon: "/icons/matrix.svg"
			}
		]
	}
];

export default instances;
