import type { PageServerLoad } from "./$types";
import { compile } from "mdsvex";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async () => {
	return {
		state: await fetch(
			env.VITE_API_URL + "/api/v1/state/announcements"
		).then((res) => res.json()).catch(() => ({})),
		announcements: await fetch(
			env.VITE_API_URL + "/api/v1/announcements"
		).then((res) => res.json()).catch(() => ({})),
		content: await fetch(env.VITE_API_URL + "/api/v1/announcements")
			.then((res) => res.json())
			.then((res) => compile(res.title))
			.then((res) => res?.code).catch(() => ({})),
	};
};
