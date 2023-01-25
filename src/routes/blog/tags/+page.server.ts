import type { PageServerLoad } from "./$types";
import fetchGhost from "../fetchGhost";

export const load = (async () => {
	const data = await fetchGhost("tags");

	const meta = {
		title: "Blog tags"
	}

	return {
		tags: data,
		...meta
	}
}) satisfies PageServerLoad;