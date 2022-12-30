import type { Actions } from "./$types";
import Joi from "joi";
import { fail } from "@sveltejs/kit";
import db from "$lib/db";

export const actions: Actions = {
	add: async ({ request }) => {
		const Announcements = db.model("Announcements");

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
				created: now
			};

			await Announcements.sync();

			await Announcements.destroy({ where: {} });
	
			await Announcements.create(data);
	
			return { addSuccess: true, addMessage: "Your announcement has been posted." };
		}
	},
	delete: async () => {
		const Announcements = db.model("Announcements");

		await Announcements.sync();

		await Announcements.destroy({ where: {} });

		return { deleteSuccess: true, deleteMessage: "Your announcement has been deleted." };
	}
}