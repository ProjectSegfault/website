import type { PageServerLoad } from "./$types";
import fetchGhost from "./fetchGhost";

export const load = (async ({ fetch }) => {
	const meta = {
		title: "Blog"
	};

	return {
		posts: fetchGhost("posts"),
		...meta
	};
}) satisfies PageServerLoad;
