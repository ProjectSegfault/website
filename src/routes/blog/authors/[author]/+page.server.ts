import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load: PageServerLoad = async ({ params }) => {
	const data = await fetchApi("posts", "&filter=author:" + params.author);
	
	const authorsLoop = data.posts[0].authors.map((author: { slug: string; name: any; }) => {
		if (author.slug === params.author) {
			return author.name;
		}
	});

	return {
		posts: data.posts,
		authorName: authorsLoop.filter((tag: any) => tag !== undefined)[0]
	};
};

