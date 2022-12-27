import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async ({ params }) => {
	return {
		authors: await fetch(env.VITE_API_URL + "/api/v1/blog/authors").then(
			(res) => res.json()
		).catch(() => ({})),
	};
};
