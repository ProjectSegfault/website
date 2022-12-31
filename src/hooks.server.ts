import { SvelteKitAuth } from "@auth/sveltekit"
import Authentik from '@auth/core/providers/authentik';
import { env } from "$env/dynamic/private";

export const handle = SvelteKitAuth({
	providers: [
		//@ts-ignore
		Authentik({
			clientId: env.AUTH_CLIENT_ID,
			clientSecret: env.AUTH_CLIENT_SECRET,
			issuer: env.AUTH_ISSUER
		})
	]
})