import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load: PageServerLoad = async ({ params }) => {
	const data = await fetchApi("posts", "&filter=tags:" + params.tag);

	const tagsLoop = data.posts[0].tags.map((tag: { slug: string; name: any; }) => {
		if (tag.slug === params.tag) {
			return tag.name;
		}
	});

	return {
		posts: data.posts,
		tagName: tagsLoop.filter((tag: any) => tag !== undefined)[0]
	}
};