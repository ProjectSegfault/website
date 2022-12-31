import type { Actions, PageServerLoad } from "./$types";
import { Webhook, MessageBuilder } from "discord-webhook-node";
import Joi from "joi";
import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const load = (() => {
	return {
		hcaptchaSitekey: env.HCAPTCHA_SITEKEY
	}
}) satisfies PageServerLoad

export const actions: Actions = {
	form: async ({ request, getClientAddress, fetch }) => {
		const formData = await request.formData();
		
		const BodyTypeSchema = Joi.object({
			email: Joi.string().email().required(),
			commentType: Joi.string().required(),
			message: Joi.string().required(),
			"h-captcha-response": Joi.string().required(),
			"g-recaptcha-response": Joi.string().optional().allow("")
		});
		
		if (BodyTypeSchema.validate(Object.fromEntries(formData.entries())).error) {
			return fail(400, { error: true, message: String(BodyTypeSchema.validate(Object.fromEntries(formData.entries())).error) });
		} else {
			const ip = getClientAddress();

			const verify = await fetch("https://hcaptcha.com/siteverify", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: new URLSearchParams({
					secret: env.HCAPTCHA_SECRET,
					response: String(formData.get("h-captcha-response")),
					remoteip: ip
				})
			}).then((res) => res.json())


			const hook = new Webhook(env.WEBHOOK);

			const data = await verify;

			if (data.success) {
				const embed = new MessageBuilder()
					.setAuthor(
						`${ip}, ${formData.get("email")}, https://abuseipdb.com/check/${ip}`
					)
					// @ts-ignore
					.addField("Comment type", formData.get("commentType"), true)
					// @ts-ignore
					.addField("Message", formData.get("message"))
					.setTimestamp();

				hook.send(embed);

				return { success: true, message: "Thanks for your message, we will get back to you as soon as possible." };
			} else {
				hook.send(
					`IP: ${ip}, https://abuseipdb.com/check/${ip}\nfailed to complete the captcha with error: ${data["error-codes"]}.`
				);

				return fail(400, { error: true, message: "Captcha failed or expired, please try again. If this keeps happening, assume the captcha is broken and contact us on Matrix." + " Error: " + data["error-codes"] });
			}
		}
	}
}