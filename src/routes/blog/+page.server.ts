import type { PageServerLoad } from "./$types";
import { blogPosts } from "../../stores";
import { get } from "svelte/store";

export const load = (async () => {
	const meta = {
		title: "Blog"
	};

	return {
		posts: get(blogPosts),
		...meta
	};
}) satisfies PageServerLoad;
