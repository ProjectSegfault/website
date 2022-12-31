import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load = (async ({ params }) => {
	const data = await fetchApi("posts/slug/" + params.title);

	return {
		post: data.posts[0]
	};
}) satisfies PageServerLoad;
