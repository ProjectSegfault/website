import { SvelteKitAuth } from "@auth/sveltekit"
import Authentik from '@auth/core/providers/authentik';
import config from "$lib/config";

export const handle = SvelteKitAuth({
	providers: [
		//@ts-ignore
		Authentik({
			clientId: config.app.auth.clientId,
			clientSecret: config.app.auth.clientSecret,
			issuer: config.app.auth.issuer
		})
	]
})