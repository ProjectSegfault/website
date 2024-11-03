import type { PageServerLoad } from "./$types";
import fetchGhost from "../../fetchGhost";

export const load = (async ({ params, fetch }) => {
	const data = await fetchGhost("posts", "&filter=author:" + params.author);

	const authorsLoop = !data.error
		? data.posts[0].authors.map((author: { slug: string; name: any }) => {
				if (author.slug === params.author) {
					return author.name;
				}
		  })
		: [];

	const authorName = authorsLoop.filter((tag: any) => tag !== undefined)[0];

	const meta = {
		title: "Blog author " + authorName,
		description: "Blog posts by " + authorName
	};

	return {
		posts: data,
		authorName,
		...meta
	};
}) satisfies PageServerLoad;
