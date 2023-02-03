import type { PageServerLoad } from "./$types";
import axios from "axios";
import { Agent } from "https";
import { env } from "$env/dynamic/private";

const agent = new Agent({
	family: 4
});

export const load = (async () => {
	const meta = {
		title: "Home",
		description: "Open source development and hosted services."
	};

	try {
		const res = await axios(env.KUMA_URL, { httpsAgent: agent });

		if (res.status === 200) {
			return { announcements: res.data, ...meta };
		} else {
			return { error: true, message: "Error: " + res.status };
		}
	} catch (err) {
		return { error: true, message: "Error: " + err };
	}
}) satisfies PageServerLoad;
