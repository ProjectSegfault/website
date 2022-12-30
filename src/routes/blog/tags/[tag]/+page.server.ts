import type { PageServerLoad } from "./$types";
import db from "$lib/db";
import { Op } from "sequelize";

export const load: PageServerLoad = async ({ params }) => {
	const Posts = db.model("Posts");

	const data = await Posts.findAll({
		where: {
			tags: {
				[Op.contains]: [params.tag]
			}
		}
	}).then((docs) => {
		return docs.map((doc) => doc.get());
	});

	if (data.length === 0 || data[0] === undefined) {
		return {
			posts: [],
			tagName: params.tag
		}
	} else {
		return {
			posts: data,
			tagName: params.tag
		}
	}
};