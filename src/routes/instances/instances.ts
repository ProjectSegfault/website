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
				name: "Libreddit",
				description: "A front-end for Reddit.",
				geo: "https://libreddit.projectsegfau.lt/",
				short_geo: "https://lr.psf.lt/",
				tor: "http://libreddit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/libreddit.png"
			},
			{
				name: "Nitter (Donator-Only)",
				description: "A front-end for Twitter.",
				eu: "https://nitter.projectsegfau.lt/",
				short_eu: "https://n.psf.lt/",
				tor: "http://nitter.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/nitter.png"
			},
			{
				name: "Mozhi",
				description: "A front-end for many translation engines.",
				geo: "https://translate.projectsegfau.lt/",
				short_geo: "https://tl.psf.lt/",
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
				name: "Vaultwarden",
				description: "An open-source password manager.",
				in: "https://pass.projectsegfau.lt/",
				short_in: "https://vw.psf.lt/",
				tor: "http://pass.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/vaultwarden.svg"
			},
			{
				name: "Owncloud",
				description: "A File Storage and Collaboration Software.",
				in: "https://owncloud.projectsegfau.lt/",
				icon: "/icons/owncloud.svg"
			},
			{
				name: "Ente",
				description: "A safe home for your photos.",
				in: "https://ente.projectsegfau.lt/",
				short_in: "https://pic.psf.lt/",
				tor: "http://ente.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/ente.svg"
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
				name: "WikiJS",
				description: "Our wiki.",
				in: "https://wiki.projectsegfau.lt/",
				short_in: "https://w.psf.lt/",
				tor: "http://wiki.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/wikijs.svg"
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
				name: "Soju",
				description: "A user-friendly IRC bouncer.",
				in: "https://wiki.projectsegfau.lt/IRC_Bouncer"
			}
		]
	},
	{
		name: "Mail Services (Contact us to get access)",
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
