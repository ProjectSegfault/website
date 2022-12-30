import type { Actions, PageServerLoad } from "./$types";
import db from "$lib/db";
import Joi from "joi";
import { fail } from "@sveltejs/kit";
 
export const load = ( async () => {
	const Posts = db.model("Posts");

	return {
		postTitles: await Posts.findAll({ attributes: ["title"] }).then((docs) => {
			const titles = docs.map((doc) => doc.get("title"));
			return titles;
		})
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	add: async ({ request }) => {
		const formData = await request.formData();

		const AddPostTypeSchema = Joi.object({
			title: Joi.string().required(),
			content: Joi.string().required(),
			tags: Joi.string().optional().allow(""),
			author: Joi.string().required()
		});

		if (AddPostTypeSchema.validate(Object.fromEntries(formData.entries())).error) {
			return fail(400, { addError: true, addMessage: String(AddPostTypeSchema.validate(Object.fromEntries(formData.entries())).error) });
		} else {
			const Posts = db.model("Posts");

			//@ts-ignore
			const words = formData.get("content")!.trim().split(/\s+/).length;

			//@ts-ignore
			const tags = formData.get("tags") ? formData.get("tags").split(" ") : []; 

			const now = Math.floor(Date.now() / 1000);

			const data = {
				title: formData.get("title"),
				content: formData.get("content"),
				tags: tags,
				author: formData.get("author"),
				created: now,
				words: words,
				readingTime: Math.ceil(words / 225)
			};

			if (await Posts.findOne({ where: { title: data.title } })) {
				return fail(409, { addError: true, addMessage: "A post with that title already exists." });
			} else {
				await Posts.create(data);

				return { addSuccess: true, addMessage: "Your post has been posted." };
			}
		}
	},
	delete: async ({ request }) => {
		const Posts = db.model("Posts");

		const formData = await request.formData();

		const deleteFromDb = await Posts.destroy({ where: { title: formData.get("title") } });

		if (!deleteFromDb) {
			return fail(404, { deleteError: true, deleteMessage: "A post with that title does not exist." });
		} else {
			return { deleteSuccess: true, deleteMessage: "Your post has been deleted." };
		}
	},
	edit: async ({ request }) => {
		const EditPostTypeSchema = Joi.object({
			title: Joi.string().required(),
			newTitle: Joi.string().optional().allow(""),
			content: Joi.string().optional().allow(""),
			tags: Joi.string().optional().allow(""),
			area: Joi.string().required().allow("title", "content", "tags")
		});

		const formData = await request.formData();

		if (EditPostTypeSchema.validate(Object.fromEntries(formData.entries())).error) {
			return fail(400, { editError: true, editMessage: String(EditPostTypeSchema.validate(Object.fromEntries(formData.entries())).error) });
		} else {
			if (formData.get("area") === "title") {
				const Posts = db.model("Posts");

				const updateOnDb = await Posts.update(
					{ title: formData.get("newTitle") },
					{ where: { title: formData.get("title") } }
				);

				if (updateOnDb[0] === 0) {
					return fail(404, { editError: true, editMessage: "A post with that title does not exist." });
				} else {
					return { editSuccess: true, editMessage: "Your post has been edited." };
				}
			} else if (formData.get("area") === "content") {
				const Posts = db.model("Posts");

				//@ts-ignore
				const words = formData.get("content")!.trim().split(/\s+/).length;

				const now = Math.floor(Date.now() / 1000);

				const updateonDb = await Posts.update(
					{
						content: formData.get("content"),
						words: words,
						readingTime: Math.ceil(words / 225),
						updated: now
					},
					{ where: { title: formData.get("title") } }
				);

				if (updateonDb[0] === 0) {
					return fail(404, { editError: true, editMessage: "A post with that title does not exist." });
				} else {
					return { editSuccess: true, editMessage: "Your post has been edited." };
				}
			} else if (formData.get("area") === "tags") {
				const Posts = db.model("Posts");
				
				//@ts-ignore
				const tags = formData.get("tags") ? formData.get("tags").split(" ") : []; 

				const updateOnDb = await Posts.update(
					{ tags: tags
					},
					{ where: { title: formData.get("title") } }
				);

					if (updateOnDb[0] === 0) {
						return fail(404, { editError: true, editMessage: "A post with that title does not exist." });
					} else {
						return { editSuccess: true, editMessage: "Your post has been edited." };
					}
			}
		}
	}
}