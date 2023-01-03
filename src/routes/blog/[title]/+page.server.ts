import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load = (async ({ params }) => {
	const data = await fetchApi("posts/slug/" + params.title);

	const allPosts = await fetchApi("posts");

	return {
		post: data.posts[0],
		allPosts: allPosts
	};
}) satisfies PageServerLoad;
