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
				description: "A frontend for YouTube.",
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
				description: "Another frontend for YouTube.",
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
				description: "A frontend for Reddit.",
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
				description: "A frontend for Twitter.",
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
				description: "A frontend for StackOverflow.",
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
				name: "Beatbump",
				description: "A frontend for YouTube Music.",
				geo: "https://bb.projectsegfau.lt/",
				short_geo: "https://bb.projectsegfau.lt/",
				eu: "https://bb.eu.projectsegfau.lt/",
				us: "https://bb.us.projectsegfau.lt/",
				in: "https://bb.in.projectsegfau.lt/",
				tor: "http://beatbump.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsflmvtqax7ii44qy4ladap65c3kqspbs7h7krqy7x43uovklla.b32.i2p",
				icon: "/icons/beatbump.svg"
			},
			{
				name: "BreezeWiki",
				description: "A frontend for Fandom.",
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
				description: "A frontend for GitHub.",
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
				name: "Rimgo",
				description: "A frontend for Imgur.",
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
				name: "Scribe",
				description: "A frontend for Medium.",
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
				name: "Teddit",
				description: "Another frontend for Reddit.",
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
			},
		]
	},
	{
		name: "Useful tools and services",
		data: [
			{
				name: "Matrix",
				description: "An open network for secure, decentralized communication.",
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
				description: "A private meta-search engine.",
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
				description: "A web interface for Git, alternative to GitHub.",
				eu: "https://git.projectsegfau.lt/",
				short_eu: "https://git.psf.lt/",
				tor: "http://git.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfdrtv2465bisenvzhfvdleznx4arlih2hlnrhpzugailnm7iq.b32.i2p",
				icon: "/icons/gitea.svg"
			},
			{
				name: "Hedgedoc",
				description: "Collaborative markdown notes.",
				eu: "https://doc.projectsegfau.lt/",
				short_eu: "https://d.psf.lt/",
				icon: "/icons/hedgedoc.svg"
			},
			{
				name: "Akkoma",
				description: "Federated microblogging platform.",
				eu: "https://social.projectsegfau.lt/",
				short_eu: "https://ak.psf.lt/",
				icon: "/icons/akkoma.png"
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
				description: "An open source video conferencing platform.",
				eu: "https://jitsi.projectsegfau.lt/",
				short_eu: "https://j.psf.lt/",
				icon: "/icons/jitsi.svg"
			},
			{
				name: "Vaultwarden",
				description: "An open source password manager.",
				eu: "https://pass.projectsegfau.lt/",
				short_eu: "https://vw.psf.lt/",
				tor: "http://pass.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/vaultwarden.svg"
			},
			{
				name: "Plausible analytics",
				description: "Analytics for our website.",
				eu: "https://analytics.projectsegfau.lt/",
				icon: "/icons/plausible.png"
			},
			{
				name: "Healthchecks",
				description: "Simple and Effective Cron Job Monitoring.",
				eu: "https://healthchecks.projectsegfau.lt/",
				short_eu: "https://hc.psf.lt/",
				icon: "/icons/healthchecks.svg"
			}
		]
	},
	{
		name: "Pubnix services",
		data: [
			{
				name: "Pubnix",
				description: "A Unix server open to the public with non-commercial recreational goals.",
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
				short_eu: "https://gp.p.psf.lt/"
			}
		]
	},
	{
		name: "Internal services",
		data: [
			{
				name: "Portainer",
				description: "Portainer instance for our servers.",
				eu: "https://portainer.projectsegfau.lt/",
				icon: "/icons/portainer.png"
			},
			{
				name: "Authentik",
				description: "Our OAuth provider.",
				eu: "https://sekuritee.projectsegfau.lt/",
				icon: "/icons/authentik.svg"
			},
			{
				name: "MailU",
				description: "Our mail server and webmail.",
				eu: "https://mail.projectsegfau.lt/",
				icon: "/icons/mailu.png"
			},
			{
				name: "SimpleLogin",
				description: "An open source email alias creator/manager",
				eu: "https://sl.projectsegfau.lt/",
				short_eu: "https://sl.psf.lt/",
				icon: "/icons/simplelogin.svg"
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
	}
];

export default instances;
