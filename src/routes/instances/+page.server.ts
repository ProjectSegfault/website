import { get } from "$lib/cache.server";

export const load = () => {
	return {
		status: get("status") || {}
	};
};
