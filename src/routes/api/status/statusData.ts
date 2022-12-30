import axios from "axios";

const fetchStatus = (domain: string) => {
	const req = axios("https://" + domain, { timeout: 10000 })
		.then((res) => res.status)
		.catch((err) => err.response.status);

	return req;
};

const statusData = [
	{
		name: "Privacy front-ends",
		data: [
			{
				name: "Invidious",
				description: "A frontend for YouTube.",
				link: "https://invidious.projectsegfau.lt/",
				us: "https://inv.us.projectsegfau.lt",
				bp: "https://inv.bp.projectsegfau.lt",
				icon: "https://github.com/iv-org/invidious/raw/master/assets/invidious-colored-vector.svg",
				status: await fetchStatus("invidious.projectsegfau.lt"),
				statusUs: await fetchStatus("inv.us.projectsegfau.lt"),
				statusBp: await fetchStatus("inv.bp.projectsegfau.lt")
			},
			{
				name: "Librarian",
				description: "A frontend for Odysee.",
				link: "https://lbry.projectsegfau.lt/",
				icon: "https://codeberg.org/avatars/dd785d92b4d4df06d448db075cd29274",
				status: await fetchStatus("lbry.projectsegfau.lt")
			},
			{
				name: "Libreddit",
				description: "A frontend for Reddit.",
				link: "https://libreddit.projectsegfau.lt/",
				us: "https://libreddit.us.projectsegfau.lt",
				icon: "https://github.com/spikecodes/libreddit/raw/master/static/logo.png",
				status: await fetchStatus("libreddit.projectsegfau.lt"),
				statusUs: await fetchStatus("libreddit.us.projectsegfau.lt")
			},
			{
				name: "Nitter",
				description: "A frontend for Twitter.",
				link: "https://nitter.projectsegfau.lt/",
				us: "https://nitter.us.projectsegfau.lt",
				icon: "https://github.com/zedeus/nitter/raw/master/public/logo.png",
				status: await fetchStatus("nitter.projectsegfau.lt"),
				statusUs: await fetchStatus("nitter.us.projectsegfau.lt")
			},
			{
				name: "Piped",
				description: "Another frontend for YouTube.",
				link: "https://piped.projectsegfau.lt/",
				us: "https://piped.us.projectsegfau.lt",
				icon: "https://github.com/TeamPiped/Piped/raw/master/public/img/icons/logo.svg",
				status: await fetchStatus("piped.projectsegfau.lt"),
				statusUs: await fetchStatus("piped.us.projectsegfau.lt")
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
				link: "https://chat.projectsegfau.lt/",
				icon: "https://element.io/images/logo-mark-primary.svg",
				status: await fetchStatus("chat.projectsegfau.lt")
			},
			{
				name: "SearXNG",
				description: "A private meta-search engine.",
				link: "https://search.projectsegfau.lt/search",
				us: "https://search.us.projectsegfau.lt",
				icon: "https://docs.searxng.org/_static/searxng-wordmark.svg",
				status: await fetchStatus("search.projectsegfau.lt"),
				statusUs: await fetchStatus("search.us.projectsegfau.lt")
			},
			{
				name: "Gitea",
				description: "A web interface for Git, alternative to GitHub.",
				link: "https://git.projectsegfau.lt/",
				icon: "https://gitea.io/images/gitea.png",
				status: await fetchStatus("git.projectsegfau.lt")
			}
		]
	},
	{
		name: "Internal services",
		data: [
			{
				name: "Portainer",
				description: "Portainer instance for our servers.",
				link: "https://portainer.projectsegfau.lt/",
				icon: "https://avatars.githubusercontent.com/u/22225832",
				status: await fetchStatus("portainer.projectsegfau.lt")
			},
			{
				name: "mailcow",
				description: "Our mail server and webmail.",
				link: "https://mail.projectsegfau.lt/",
				icon: "https://mailcow.email/images/cow_mailcow.svg",
				status: await fetchStatus("mail.projectsegfau.lt")
			},
			{
				name: "Plausible analytics",
				description: "Analytics for our website.",
				link: "https://analytics.projectsegfau.lt/projectsegfau.lt",
				icon: "https://avatars.githubusercontent.com/u/54802774",
				status: await fetchStatus("analytics.projectsegfau.lt")
			}
		]
	}
];

export default statusData;