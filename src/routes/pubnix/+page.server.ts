import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	const meta = {
		title: "Pubnix"
	}

	try {
		const request = await fetch("https://publapi.p.projectsegfau.lt/users");

		if (request.ok) {
			return {
				users: await request.json(),
				...meta
			};
		} else {
			return { error: true, message: "Error: " + request.status, ...meta };
		}
	} catch (err) {
		return { error: true, message: "Error: " + err, ...meta };
	}
}) satisfies PageServerLoad;