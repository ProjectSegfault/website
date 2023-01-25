import instances from "../instances";
import type { PageServerLoad } from "./$types";

export const load = (() => {
	const meta = {
		title: "Instances"
	}

	return { instances, ...meta };
}) satisfies PageServerLoad;