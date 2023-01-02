import axios from "axios";

const fetchStatus = (domain: string) => {
	const req = axios("https://" + domain, { timeout: 5000 })
		.then((res) => res.status)
		.catch((error) => error.response ? error.response.status : 500);

	return req;
};

const statusData = [
	{
		name: "Privacy front-ends",
		data: [
			{
				name: "Invidious",
				description: "A frontend for YouTube.",
				eu: "https://invidious.projectsegfau.lt/",
				us: "https://inv.us.projectsegfau.lt",
				bp: "https://inv.bp.projectsegfau.lt",
				torBp: "http://invbp.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/invidious.svg",
				statusEu: await fetchStatus("invidious.projectsegfau.lt"),
				statusUs: await fetchStatus("inv.us.projectsegfau.lt"),
				statusBp: await fetchStatus("inv.bp.projectsegfau.lt")
			},
			{
				name: "Librarian",
				description: "A frontend for Odysee.",
				eu: "https://lbry.projectsegfau.lt/",
				geo: "https://lbry.g.projectsegfau.lt/",
				tor: "http://lbry.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/librarian.png",
				statusEu: await fetchStatus("lbry.projectsegfau.lt"),
				statusGeo: await fetchStatus("lbry.g.projectsegfau.lt")
			},
			{
				name: "Libreddit",
				description: "A frontend for Reddit.",
				eu: "https://libreddit.projectsegfau.lt/",
				us: "https://libreddit.us.projectsegfau.lt",
				geo: "https://libreddit.g.projectsegfau.lt/",
				tor: "http://libreddit.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/libreddit.png",
				statusEu: await fetchStatus("libreddit.projectsegfau.lt"),
				statusUs: await fetchStatus("libreddit.us.projectsegfau.lt"),
				statusGeo: await fetchStatus("libreddit.g.projectsegfau.lt")
			},
			{
				name: "Nitter",
				description: "A frontend for Twitter.",
				eu: "https://nitter.projectsegfau.lt/",
				us: "https://nitter.us.projectsegfau.lt",
				geo: "https://nitter.g.projectsegfau.lt/",
				tor: "http://nitter.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/nitter.png",
				statusEu: await fetchStatus("nitter.projectsegfau.lt"),
				statusUs: await fetchStatus("nitter.us.projectsegfau.lt"),
				statusGeo: await fetchStatus("nitter.g.projectsegfau.lt")
			},
			{
				name: "Piped",
				description: "Another frontend for YouTube.",
				eu: "https://piped.projectsegfau.lt/",
				us: "https://piped.us.projectsegfau.lt",
				icon: "/icons/piped.svg",
				statusEu: await fetchStatus("piped.projectsegfau.lt"),
				statusUs: await fetchStatus("piped.us.projectsegfau.lt")
			},
			{
				name: "Beatbump",
				description: "A frontend for YouTube Music.",
				eu: "https://bb.eu.projectsegfau.lt/",
				us: "https://bb.us.projectsegfau.lt/",
				geo: "https://bb.g.projectsegfau.lt/",
				tor: "http://beatbump.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/beatbump.svg",
				statusEu: await fetchStatus("bb.eu.projectsegfau.lt"),
				statusUs: await fetchStatus("bb.us.projectsegfau.lt"),
				statusGeo: await fetchStatus("bb.g.projectsegfau.lt")
			},
			{
				name: "BreezeWiki",
				description: "A frontend for Fandom.",
				eu: "https://bw.eu.projectsegfau.lt/",
				us: "https://bw.us.projectsegfau.lt/",
				geo: "https://bw.g.projectsegfau.lt/",
				tor: "http://breezewiki.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				icon: "/icons/breezewiki.svg",
				statusEu: await fetchStatus("bw.eu.projectsegfau.lt"),
				statusUs: await fetchStatus("bw.us.projectsegfau.lt"),
				statusGeo: await fetchStatus("bw.g.projectsegfau.lt")
			},
			{
				name: "Scribe",
				description: "A frontend for Medium.",
				eu: "https://scribe.eu.projectsegfau.lt/",
				us: "https://scribe.us.projectsegfau.lt/",
				geo: "https://scribe.g.projectsegfau.lt/",
				tor: "http://scribe.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
				statusEu: await fetchStatus("scribe.eu.projectsegfau.lt"),
				statusUs: await fetchStatus("scribe.us.projectsegfau.lt"),
				statusGeo: await fetchStatus("scribe.g.projectsegfau.lt")
			}
		]
	},
	{
		name: "Useful tools and services",
		data: [
			{
				name: "Element",
				description:
					"An open source and decentralized chat application.",
				eu: "https://chat.projectsegfau.lt/",
				icon: "/icons/element.svg",
				statusEu: await fetchStatus("chat.projectsegfau.lt")
			},
			{
				name: "SearXNG",
				description: "A private meta-search engine.",
				eu: "https://search.projectsegfau.lt/search",
				us: "https://search.us.projectsegfau.lt",
				icon: "/icons/searxng.svg",
				statusEu: await fetchStatus("search.projectsegfau.lt"),
				statusUs: await fetchStatus("search.us.projectsegfau.lt")
			},
			{
				name: "Gitea",
				description: "A web interface for Git, alternative to GitHub.",
				eu: "https://git.projectsegfau.lt/",
				icon: "/icons/gitea.png",
				statusEu: await fetchStatus("git.projectsegfau.lt")
			},
			{
				name: "Akkoma",
				description: "Federated microblogging platform.",
				eu: "https://social.projectsegfau.lt/",
				icon: "/icons/akkoma.png",
				statusEu: await fetchStatus("social.projectsegfau.lt")
			},
			{
				name: "Vikunja",
				description: "A task management platform.",
				eu: "https://todo.projectsegfau.lt/",
				icon: "/icons/vikunja.png",
				statusEu: await fetchStatus("todo.projectsegfau.lt")
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
				icon: "/icons/portainer.png",
				statusEu: await fetchStatus("portainer.projectsegfau.lt")
			},
			{
				name: "Authentik",
				description: "Our OAuth provider.",
				eu: "https://sekuritee.projectsegfau.lt/",
				icon: "/icons/authentik.png",
				statusEu: await fetchStatus("sekuritee.projectsegfau.lt")
			},
			{
				name: "mailcow",
				description: "Our mail server and webmail.",
				eu: "https://mail.projectsegfau.lt/",
				icon: "/icons/mailcow.svg",
				statusEu: await fetchStatus("mail.projectsegfau.lt")
			},
			{
				name: "Plausible analytics",
				description: "Analytics for our website.",
				eu: "https://analytics.projectsegfau.lt/projectsegfau.lt",
				icon: "/icons/plausible.png",
				statusEu: await fetchStatus("analytics.projectsegfau.lt")
			}
		]
	}
];

export default statusData;