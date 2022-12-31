import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load: PageServerLoad = async ({ params }) => {
	const data = await fetchApi("posts", "&filter=tags:" + params.tag);

	return {
		posts: data.posts,
		tagName: params.tag
	}
};