import type { PageServerLoad } from "./$types";
import { pubnixUsers } from "../../stores";
import { get } from "svelte/store";

export const load = (async () => {
	const meta = {
		title: "Pubnix"
	};

	return {
		users: get(pubnixUsers),
		onlineUserCount: get(pubnixUsers).length,
		...meta
	}
}) satisfies PageServerLoad;
