import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load = (async () => {
	const data = await fetchApi("posts");

	return {
		posts: data.posts
	};
}) satisfies PageServerLoad;
