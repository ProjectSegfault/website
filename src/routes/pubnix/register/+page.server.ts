import type { Actions, PageServerLoad } from "./$types";
import Joi from "joi";
import { fail } from "@sveltejs/kit";

export const load = (() => {
	return {
		title: "Pubnix registration"
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, fetch, getClientAddress }) => {
		const formData = await request.formData();

		const BodyTypeSchema = Joi.object({
			username: Joi.string()
				.required()
				.alphanum()
				.message("Username must be alphanumeric"),
			email: Joi.string().email().required(),
			ssh: Joi.string()
				.required()
				.pattern(
					/^(ssh-rsa|ssh-ed25519|ecdsa-sha2-nistp256|ecdsa-sha2-nistp384|ecdsa-sha2-nistp521) [A-Za-z0-9+/]+[=]{0,3}( [^@]+@[^@]+)?$/
				)
				.message("Invalid SSH key"),
			ip: Joi.string().required().ip()
		});

		formData.append("ip", getClientAddress());

		if (
			BodyTypeSchema.validate(Object.fromEntries(formData.entries()))
				.error
		) {
			return fail(400, {
				error: true,
				message: String(
					BodyTypeSchema.validate(
						Object.fromEntries(formData.entries())
					).error
				)
			});
		} else {
			try {
				const request = await fetch(
					"https://publapi.p.projectsegfau.lt/signup",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						body: new URLSearchParams(formData as any).toString()
					}
				);

				const json = await request.json();

				if (request.ok) {
					return {
						success: true,
						message: json.message,
						username: json.username,
						email: json.email
					};
				} else {
					return fail(400, {
						error: true,
						message: "Error: " + request.status
					});
				}
			} catch (err) {
				return { error: true, message: "Error: " + err };
			}
		}
	}
};
