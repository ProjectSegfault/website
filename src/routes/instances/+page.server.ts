import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		instances: await fetch("/api/status").then(
			(res) => res.json()
		)
	};
};
