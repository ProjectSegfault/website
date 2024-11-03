import instances from "./instances";
import type { PageServerLoad } from "./$types";

export const load = (({ url }) => {
	const meta = {
		title: "Instances"
	};

	// If the ?short url query exists, then longUrl is false
	// Every other case is true
	const queryLongUrl = !url.searchParams.has("short");

	return {
		instances,
		queryLongUrl,
		...meta
	};
}) satisfies PageServerLoad;
