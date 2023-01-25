import type { PageServerLoad } from "./$types";
import fetchGhost from "../../fetchGhost";

export const load = (async ({ params, fetch }) => {
	const data = await fetchGhost("posts", "&filter=tags:" + params.tag);

	const tagsLoop = !data.error ? data.posts[0].tags.map((tag: { slug: string; name: any; }) => {
		if (tag.slug === params.tag) {
			return tag.name;
		}
	}) : [];

	const tagName = tagsLoop.filter((tag: any) => tag !== undefined)[0];

	const meta = {
		title: "Blog tag " + tagName
	}

	return {
		posts: data,
		tagName: tagName,
		...meta
	}
}) satisfies PageServerLoad;