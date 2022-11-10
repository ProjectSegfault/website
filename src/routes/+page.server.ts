import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        state: await fetch("https://api.projectsegfau.lt/api/v1/state/announcements").then((res) => res.json()),
        announcements: await fetch("https://api.projectsegfau.lt/api/v1/announcements").then((res) => res.json())
    }
}