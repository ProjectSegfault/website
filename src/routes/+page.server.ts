import type { PageServerLoad } from "./$types";
import { announcements } from "../stores";
import { get } from "svelte/store";

export const load = (async () => {
	const meta = {
		title: "Home",
		description: "Open source development and hosted services."
	};

	return {
		announcements: get(announcements),
		...meta
	}
}) satisfies PageServerLoad;
