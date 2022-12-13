import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async () => {
	return {
		state: await fetch(env.VITE_API_URL + "/api/v1/state/status").then((res) => res.json()),
		instances: await fetch(env.VITE_API_URL + "/api/v1/status").then((res) => res.json())
	}
}