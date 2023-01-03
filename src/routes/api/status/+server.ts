import type { RequestHandler } from './$types';
import map from "$lib/map";

export const GET = (() => {
	const data = map.get("data");

	return new Response(JSON.stringify(data), {
		headers: {
			"content-type": "application/json; charset=utf-8"
		}
	});
}) satisfies RequestHandler;