import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	try {
		const request = await fetch("https://publapi.projectsegfau.lt/online");

		if (request.ok) {
			return request.json();
		} else {
			return { error: true, message: "Error: " + request.status };
		}
	} catch (err) {
		return { error: true, message: "Error: " + err };
	}
}) satisfies PageServerLoad;
