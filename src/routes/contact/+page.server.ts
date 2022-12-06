import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
    return {
        state: await fetch(import.meta.env.VITE_API_URL + "/api/v1/state/form").then((res) => res.json())
    }
}