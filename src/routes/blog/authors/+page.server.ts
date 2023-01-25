import type { PageServerLoad } from "./$types";
import fetchGhost from "../fetchGhost";

export const load = (async ({ fetch }) => {
	const data = await fetchGhost("authors");

	const meta = {
		title: "Blog authors"
	}

	return {
		authors: data,
		...meta
	};
}) satisfies PageServerLoad;
