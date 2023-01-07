import type { Actions } from "./$types";
import Joi from "joi";
import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const actions: Actions = {
	default: async ({ request, fetch, getClientAddress }) => {
		const formData = await request.formData();

		const BodyTypeSchema = Joi.object({
			username: Joi.string().required(),
			email: Joi.string().email().required()
		});

		if (BodyTypeSchema.validate(Object.fromEntries(formData.entries())).error) {
			return fail(400, { error: true, message: String(BodyTypeSchema.validate(Object.fromEntries(formData.entries())).error) });
		} else {
			const request = await fetch("https://publapi.projectsegfau.lt/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username: formData.get("username"),
					email: formData.get("email"),
					ip: getClientAddress()
				})
			}).then((res) => res.json())
			.catch((err) => {
				return fail(400, { error: true, message: "Error: " + err });
			});

			if (request.ok) {
				return { success: true, message: request.message, username: request.username, email: request.email };
			} else {
				return fail(400, { error: true, message: "Error: " + request.status });
			}
		}
	}
}