import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load: PageServerLoad = async ({ params }) => {
	const data = await fetchApi("posts", "&filter=author:" + params.author);

	return {
		posts: data.posts,
		authorName: params.author
	};
};

