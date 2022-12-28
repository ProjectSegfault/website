import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";
import { compile } from "mdsvex";

export const load: PageServerLoad = async ({ params }) => {
	return {
		post: await fetch(env.VITE_API_URL + "/api/v1/blog/" + params.title).then(
			(res) => res.json()
		).catch(() => ({})),
		content: await fetch(env.VITE_API_URL + "/api/v1/blog/" + params.title)
			.then((res) => res.json())
			.then((res) => compile(res.content))
			.then((res) => res?.code)
			.catch(() => ({})),
	};
};
