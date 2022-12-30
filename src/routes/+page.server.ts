import type { PageServerLoad } from "./$types";
import { compile } from "mdsvex";
import db from "$lib/db";

export const load: PageServerLoad = async () => {
	const Announcements = db.model("Announcements");

	const data = await Announcements.findAll().then((docs) => {
		return docs.map((doc) => doc.get());
	});

	if (data.length !== 0 || data[0] !== undefined) {
		return {
			announcements: data[0],
			content: compile(data[0]["title"]).then((compiled) => compiled?.code)
		}
	}
};
