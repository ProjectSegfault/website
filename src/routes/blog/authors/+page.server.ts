import type { PageServerLoad } from "./$types";
import db from "$lib/db";

export const load: PageServerLoad = async ({ params }) => {
	const Posts = db.model("Posts");

	const data = await Posts.findAll({
		attributes: ["author"]
	})

	if (data.length === 0 || data[0] === undefined) {
		return {
			authors: []
		}
	} else {
		const authors = data.map((post) => post["author"]);
		const uniqueAuthors = [...new Set(authors)];

		return {
			authors: uniqueAuthors
		}
	}
};
