import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return await fetch("https://api.projectsegfau.lt/api/v1/status").then((res) => res.json());
}