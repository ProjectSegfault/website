import type { PageServerLoad } from "./$types";
import fetchGhost from "../fetchGhost";

export const load = (async ({ params, fetch }) => {
	const data = await fetchGhost("posts/slug/" + params.title);

	const allPosts = await fetchGhost("posts");

	const meta = {
		title: !allPosts.error ? data.posts[0].title : ""
	};

	return {
		post: !allPosts.error ? data.posts[0] : {},
		allPosts: allPosts,
		...meta
	};
}) satisfies PageServerLoad;
