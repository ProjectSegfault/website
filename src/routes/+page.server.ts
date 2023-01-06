import type { PageServerLoad } from "./$types";
import { compile } from "mdsvex";
import sanitizeHtml from "sanitize-html";
import db from "$lib/db";

export const load: PageServerLoad = async () => {

	const data = await db("Announcements").select("*");

	if (data.length !== 0 || data[0] !== undefined) {

		const sanitizedContent = sanitizeHtml(data[0].title)

		return {
			announcements: data[0],
			content: compile(sanitizedContent).then((compiled) => compiled?.code)
		}
	}
};
