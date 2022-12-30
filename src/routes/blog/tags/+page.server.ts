import type { PageServerLoad } from "./$types";
import db from "$lib/db";

export const load: PageServerLoad = async () => {
	const Posts = db.model("Posts");

	const data = await Posts.findAll({ attributes: ["tags"] })

	if (data.length === 0 || data[0] === undefined) {
		return {
			tags: []
		}
	} else {
		const tags = data.map((post) => post["tags"]).flat();
		const uniqueTags = [...new Set(tags)];
		return {
			tags: uniqueTags
		}
	}
};
