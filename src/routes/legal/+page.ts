import type { PageLoad } from "./$types";

export const load = (() => {
	return {
		title: "Boring legal stuff",
		description:
			"These are some documents concerning transparency, privacy and safety."
	};
}) satisfies PageLoad;
