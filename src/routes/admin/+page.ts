import type { PageLoad } from "./$types";

export const load = (() => {
	return {
		title: "Admin dashboard"
	};
}) satisfies PageLoad;
