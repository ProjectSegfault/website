import type { PageServerLoad } from "./$types";
import db from "$lib/db";
import { compile } from "mdsvex";

export const load: PageServerLoad = async ({ params }) => {
	const Posts = db.model("Posts");

	const data = await Posts.findAll({
		where: {
			title: params.title
		}
	}).then((docs) => {
		return docs.map((doc) => doc.get());
	});

	if (data.length === 0 || data[0] === undefined) {
		return {
			post: {},
			content: {}
		}
	} else {
		return {
			post: data[0],
			content: compile(data[0].content).then((res) => res?.code)
		}	
	}
};
