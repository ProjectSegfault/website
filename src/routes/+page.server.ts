import type { PageServerLoad } from "./$types";
import { compile } from "mdsvex";
import sanitizeHtml from "sanitize-html";
import db from "$lib/db";

export const load: PageServerLoad = async () => {
	const Announcements = db.model("Announcements");

	const data = await Announcements.findAll().then((docs) => {
		return docs.map((doc) => doc.get());
	});

	const sanitizedContent = sanitizeHtml(data[0].title)

	if (data.length !== 0 || data[0] !== undefined) {
		return {
			announcements: data[0],
			content: compile(sanitizedContent).then((compiled) => compiled?.code)
		}
	}
};
