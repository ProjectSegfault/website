interface Instances {
	name: string;
	data: Instance[];
}

interface Instance {
	name: string;
	description: string;
	geo?: string;
	eu?: string;
	us?: string;
	in?: string;
	bp?: string;
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
				us: "https://inv.us.projectsegfau.lt",
				in: "https://inv.in.projectsegfau.lt",
				bp: "https://inv.bp.projectsegfau.lt",
				tor: "http://inv.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				torBp: "http://invbp.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http:////pjsfhqamc7k6htnumrvn4cwqqdoggeepj7u5viyimgnxg3gar72q.b32.i2p",
				i2pBp: "http://pjsfi2szfkb4guqzmfmlyq4no46fayertjrwt4h2uughccrh2lvq.b32.i2p",
				icon: "/icons/invidious.svg"
			},
			{
				name: "Piped",
				description: "Another frontend for YouTube.",
				eu: "https://piped.projectsegfau.lt/",
				us: "https://piped.us.projectsegfau.lt",
				in: "https://piped.in.projectsegfau.lt",
				icon: "/icons/piped.svg"
			},
			{
				name: "Libreddit",
				description: "A frontend for Reddit.",
				geo: "https://libreddit.projectsegfau.lt/",
				eu: "https://libreddit.eu.projectsegfau.lt/",
				us: "https://libreddit.us.projectsegfau.lt",
				in: "https://libreddit.in.projectsegfau.lt",
				tor: "http://libreddit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfkref7g66mji45kyccqnn5hmjtjp3cfodozabpyplj2rmv5sa.b32.i2p",
				icon: "/icons/libreddit.png"
			},
			{
				name: "Nitter",
				description: "A frontend for Twitter.",
				geo: "https://nitter.projectsegfau.lt/",
				eu: "https://nitter.eu.projectsegfau.lt/",
				us: "https://nitter.us.projectsegfau.lt",
				in: "https://nitter.in.projectsegfau.lt",
				tor: "http://nitter.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfs4ukb6prmfx3qx3a5ef2cpcupkvcrxdh72kqn2rxc2cw4nka.b32.i2p",
				icon: "/icons/nitter.png"
			},
			{
				name: "AnonymousOverflow",
				description: "A frontend for StackOverflow.",
				geo: "https://overflow.projectsegfau.lt",
				eu: "https://overflow.eu.projectsegfau.lt",
				us: "https://overflow.us.projectsegfau.lt",
				in: "https://overflow.in.projectsegfau.lt",
				icon: "/icons/anonymousoverflow.png"
			},
			{
				name: "Beatbump",
				description: "A frontend for YouTube Music.",
				geo: "https://bb.projectsegfau.lt/",
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
				eu: "https://bw.eu.projectsegfau.lt/",
				us: "https://bw.us.projectsegfau.lt/",
				in: "https://bw.in.projectsegfau.lt/",
				tor: "http://breezewiki.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfk4xvekoc7wx4pteevp3q2wy7jmzlem7rvl74nx33zkdr4vyq.b32.i2p",
				icon: "/icons/breezewiki.svg"
			},
			{
				name: "Gothub",
				description: "A frontend for Github.",
				geo: "https://gothub.projectsegfau.lt",
				eu: "https://gothub.eu.projectsegfau.lt",
				us: "https://gothub.us.projectsegfau.lt",
				in: "https://gothub.in.projectsegfau.lt",
				icon: "/icons/gothub.svg"
			},
			{
				name: "Librarian",
				description: "A frontend for LBRY/Odysee.",
				geo: "https://lbry.projectsegfau.lt/",
				eu: "https://lbry.eu.projectsegfau.lt/",
				in: "https://lbry.in.projectsegfau.lt/",
				tor: "http://lbry.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsf7uucpqf2crcmfo3nvwdmjhirxxjfyuvibdfp5x3af2ghqnaa.b32.i2p",
				icon: "/icons/librarian.png"
			},
			{
				name: "Rimgo",
				description: "A frontend for Imgur.",
				geo: "https://rimgo.projectsegfau.lt/",
				eu: "https://rimgo.eu.projectsegfau.lt/",
				us: "https://rimgo.us.projectsegfau.lt/",
				in: "https://rimgo.in.projectsegfau.lt/",
				icon: "/icons/rimgo.png"
			},
			{
				name: "Scribe",
				description: "A frontend for Medium.",
				geo: "https://scribe.projectsegfau.lt/",
				eu: "https://scribe.eu.projectsegfau.lt/",
				us: "https://scribe.us.projectsegfau.lt/",
				in: "https://scribe.in.projectsegfau.lt/",
				tor: "http://scribe.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsflkkkcn33ahmzmpyq6idy2knkzh4atp7zaetqfsnenpyori6a.b32.i2p"
			},
			{
				name: "Teddit",
				description: "Another frontend for Reddit.",
				geo: "https://teddit.projectsegfau.lt/",
				eu: "https://teddit.eu.projectsegfau.lt/",
				us: "https://teddit.us.projectsegfau.lt/",
				in: "https://teddit.in.projectsegfau.lt/",
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
				icon: "/icons/matrix.svg"
			},
			{
				name: "Element",
				description: "A feature-rich Matrix client.",
				eu: "https://chat.projectsegfau.lt/",
				tor: "http://element.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfiixntiokc4ioroivnw7dd5hhqmvn2pt2jwfgrqdex5qjnroq.b32.i2p",
				icon: "/icons/element.svg"
			},
			{
				name: "Hydrogen",
				description: "A lightweight Matrix client.",
				eu: "https://hydrogen.projectsegfau.lt/",
				tor: "http://hydrogen.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfoanqklg3eb3ktvqwmpyiy54b77orr7bmymkwmu56c3zjfltq.b32.i2p",
				icon: "/icons/hydrogen.svg"
			},
			{
				name: "Cinny",
				description: "An elegant Matrix client.",
				eu: "https://cinny.projectsegfau.lt/",
				tor: "http://cinny.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfgcl4gfbfrk5qte7qb7hqnfwyhflrjcqdldlzmy6yyr2l65oa.b32.i2p",
				icon: "/icons/cinny.svg"
			},
			{
				name: "XMPP",
				description: "The universal messaging standard.",
				eu: "https://wiki.projectsegfau.lt/XMPP",
				icon: "/icons/xmpp.svg"
			},
			{
				name: "SearXNG",
				description: "A private meta-search engine.",
				eu: "https://search.projectsegfau.lt/",
				us: "https://search.us.projectsegfau.lt",
				in: "https://search.in.projectsegfau.lt",
				tor: "http://search.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfwklrellqoj275kzeu2tz4c3j5zktnqod56s7l5dc25ro3wgq.b32.i2p",
				icon: "/icons/searxng.svg"
			},
			{
				name: "Gitea",
				description: "A web interface for Git, alternative to GitHub.",
				eu: "https://git.projectsegfau.lt/",
				tor: "http://git.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfdrtv2465bisenvzhfvdleznx4arlih2hlnrhpzugailnm7iq.b32.i2p",
				icon: "/icons/gitea.svg"
			},
			{
				name: "Hedgedoc",
				description: "Collaborative markdown notes.",
				eu: "https://doc.projectsegfau.lt",
				icon: "/icons/hedgedoc.svg"
			},
			{
				name: "Akkoma",
				description: "Federated microblogging platform.",
				eu: "https://social.projectsegfau.lt/",
				tor: "http://social.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsflarasgpaod2wqccnl7dbolexm7awjz7atqe73nfkhckr66ca.b32.i2p",
				icon: "/icons/akkoma.png"
			},
			{
				name: "Vikunja",
				description: "A task management platform.",
				eu: "https://todo.projectsegfau.lt/",
				tor: "http://todo.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				i2p: "http://pjsfivs2sxudfy65kojxqophc6vqjqdr6woczy6hzaxvxvbj3bkq.b32.i2p",
				icon: "/icons/vikunja.png"
			},
			{
				name: "Jitsi",
				description: "An open source video conferencing platform.",
				eu: "https://jitsi.projectsegfau.lt",
				icon: "/icons/jitsi.svg"
			},
			{
				name: "Vaultwarden",
				description: "An open source password manager.",
				eu: "https://pass.projectsegfau.lt",
				icon: "/icons/vaultwarden.svg"
			},
			{
				name: "Cal",
				description: "Open scheduling infrastructure for everyone.",
				eu: "https://cal.projectsegfau.lt",
				icon: "/icons/cal.svg"
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
				icon: "/icons/simplelogin.svg"
			},
			{
				name: "Plausible analytics",
				description: "Analytics for our website.",
				eu: "https://analytics.projectsegfau.lt/projectsegfau.lt",
				icon: "/icons/plausible.png"
			},
			{
				name: "MediaWiki",
				description: "Our wiki.",
				eu: "https://wiki.projectsegfau.lt/",
				icon: "/icons/mediawiki.svg"
			}
		]
	}
];

export default instances;
