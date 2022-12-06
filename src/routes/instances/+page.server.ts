import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return await fetch(import.meta.env.VITE_API_URL + "/api/v1/status").then((res) => res.json());
}