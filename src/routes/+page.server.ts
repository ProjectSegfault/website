import type { PageServerLoad } from "./$types";
import { compile } from "mdsvex";

export const load: PageServerLoad = async () => {
    return {
        state: await fetch("https://api.projectsegfau.lt/api/v1/state/announcements").then((res) => res.json()),
        announcements: await fetch("https://api.projectsegfau.lt/api/v1/announcements").then((res) => res.json()),
        content: await fetch("https://api.projectsegfau.lt/api/v1/announcements").then((res) => res.json()).then((res) => compile(res.title)).then((res) => res.code)
    }
}

