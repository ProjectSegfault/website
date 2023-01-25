import type { LayoutLoad } from "./$types";

export const load = (async ({ url: { pathname } }) => {
	return {
		pathname
	}
}) satisfies LayoutLoad