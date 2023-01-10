import type { PageServerLoad } from "./$types";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { db } from "$lib/server/db";

export const load: PageServerLoad = async () => {

	const collection = db.collection("announcements");

	const data = await collection.find({}, { projection: { _id: 0 } }).toArray();

	if (data.length !== 0 || data[0] !== undefined) {

		const sanitizedContent = sanitizeHtml(data[0].title)

		return {
			announcements: data[0],
			content: marked(sanitizedContent)
		}
	}
};
