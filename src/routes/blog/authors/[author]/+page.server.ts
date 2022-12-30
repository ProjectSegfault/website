import type { PageServerLoad } from "./$types";
import db from "$lib/db";

export const load: PageServerLoad = async ({ params }) => {
	const Posts = db.model("Posts");

	const data = await Posts.findAll({
		where: {
			author: params.author
		}
	}).then((docs) => {
		return docs.map((doc) => doc.get());
	});

	if (data.length === 0 || data[0] === undefined) {
		return {
			posts: [],
			authorName: params.author
		}
	} else {
		return {
			posts: data,
			authorName: params.author
		}
	}
};