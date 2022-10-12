export const prerender = false;

export async function load() {
	const invidious = await fetch("https://invidious.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const librarian = await fetch("https://lbry.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const libreddit = await fetch("https://libreddit.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const nitter = await fetch("https://nitter.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const element = await fetch("https://chat.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const piped = await fetch("https://piped.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const searxng = await fetch("https://search.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const gitea = await fetch("https://git.projectsegfau.lt/").catch((err) => {
		return err;
	});
	const portainer = await fetch("https://portainer.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const mailcow = await fetch("https://mail.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);
	const plausible = await fetch("https://analytics.projectsegfau.lt/").catch(
		(err) => {
			return err;
		}
	);

	return {
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
}
