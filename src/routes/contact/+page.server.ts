import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
    return {
        state: await fetch("https://api.projectsegfau.lt/api/v1/state/form").then((res) => res.json())
    }
}