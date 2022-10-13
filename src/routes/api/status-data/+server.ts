import { json } from "@sveltejs/kit";
import { set } from "$lib/cache.server";

export const GET = async () => {
	const invidious = await fetch("https://invidious.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const librarian = await fetch("https://lbry.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const libreddit = await fetch("https://libreddit.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const nitter = await fetch("https://nitter.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const element = await fetch("https://chat.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const piped = await fetch("https://piped.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const searxng = await fetch("https://search.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const gitea = await fetch("https://git.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const portainer = await fetch("https://portainer.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const mailcow = await fetch("https://mail.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const plausible = await fetch("https://analytics.projectsegfau.lt/", {
		mode: "no-cors"
	}).catch((error) => error);

	const status = {
		updated: Math.floor(Date.now() / 1000),
		invidious: invidious.status || invidious.code,
		librarian: librarian.status || librarian.code,
		libreddit: libreddit.status || libreddit.code,
		nitter: nitter.status || nitter.code,
		element: element.status || element.code,
		piped: piped.status || piped.code,
		searxng: searxng.status || searxng.code,
		gitea: gitea.status || gitea.code,
		portainer: portainer.status || portainer.code,
		mailcow: mailcow.status || mailcow.code,
		plausible: plausible.status || plausible.code
	};
	set("status", status);
	return json(status);
};
