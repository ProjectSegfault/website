import { env } from "$env/dynamic/private";

const fetchApi = async (action: string, additional?: string) => {
	const data = await fetch("https://blog.projectsegfau.lt/ghost/api/content/" + action + "/?key=" + env.GHOST_API_KEY + "&include=authors,tags&limit=all&formats=html,plaintext" + (additional ? additional : ""));

	return data.json();
};

export default fetchApi;