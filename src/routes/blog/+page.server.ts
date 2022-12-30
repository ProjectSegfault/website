import type { PageServerLoad } from "./$types";
import db from "$lib/db";

export const load: PageServerLoad = async () => {
	const Posts = db.model("Posts");

	const posts = await Posts.findAll().then((docs) => {
		return docs.map((doc) => doc.get());
	});

	if (posts.length === 0 || posts[0] === undefined) {
		return {
			posts: []
		}
	} else {
		return {
			posts: posts.sort((a, b) => b["created"] - a["created"])
		}
	}
};
