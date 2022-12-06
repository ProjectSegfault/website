import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

export const load: PageServerLoad = async () => {
    return await fetch(env.VITE_API_URL + "/api/v1/status").then((res) => res.json());
}