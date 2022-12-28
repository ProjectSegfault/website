import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async () => {
	return {
		posts: await fetch(env.VITE_API_URL + "/api/v1/blog").then(
			(res) => res.json()
		).catch(() => ({}))
	};
};
