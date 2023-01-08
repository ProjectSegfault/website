import type { Actions } from "./$types";
import Joi from "joi";
import { fail } from "@sveltejs/kit";
import { db } from "$lib/server/db";

export const actions: Actions = {
	add: async ({ request, locals }) => {
		if (!await locals.getSession()) {
			return fail(401, { addError: true, addMessage: "You must be logged in to post an announcement." });
		} else {
			const formData = await request.formData();
			
			const BodyTypeSchema = Joi.object({
				title: Joi.string().required(),
				severity: Joi.string().required(),
				author: Joi.string().required(),
				link: Joi.string().optional().allow("")
			});
	
			if (BodyTypeSchema.validate(Object.fromEntries(formData.entries())).error) {
				return fail(400, { addError: true, addMessage: String(BodyTypeSchema.validate(Object.fromEntries(formData.entries())).error) });
			} else {
				const now = Math.floor(Date.now() / 1000);
				const data = {
					...Object.fromEntries(formData.entries()),
					created: now,
					createdAt: now,
					updatedAt: now
				};
	
				await db.delete("*").from("Announcements");
		
				await db("Announcements").insert(data);
		
				return { addSuccess: true, addMessage: "Your announcement has been posted." };
			}
		}

	},
	delete: async ({ locals }) => {
		if (!await locals.getSession()) {
			return fail(401, { deleteError: true, deleteMessage: "You must be logged in to delete an announcement." });
		} else {

			await db.delete("*").from("Announcements");

			return { deleteSuccess: true, deleteMessage: "Your announcement has been deleted." };
		}
	}
}