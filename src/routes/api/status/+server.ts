import type { RequestHandler } from './$types';
import statusData from "./statusData";

const map = new Map();

const updateMap = () => {
	map.set("data", {
		status: statusData,
		updated: Math.floor(Date.now() / 1000)
	});
};

updateMap();

setInterval(updateMap, 30000);

export const GET = (() => {
	const data = map.get("data");

	return new Response(JSON.stringify(data), {
		headers: {
			"content-type": "application/json; charset=utf-8"
		}
	});
}) satisfies RequestHandler;