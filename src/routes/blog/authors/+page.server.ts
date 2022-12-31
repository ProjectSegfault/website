import type { PageServerLoad } from "./$types";
import fetchApi from "$lib/ghost";

export const load: PageServerLoad = async () => {
	const data = await fetchApi("authors");

	return {
		authors: data.authors
	};
};

