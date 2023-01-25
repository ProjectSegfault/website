import { SvelteKitAuth } from "@auth/sveltekit";
import Authentik from "@auth/core/providers/authentik";
import { env } from "$env/dynamic/private";
import type { Provider } from "@auth/core/providers";
import type { Profile } from "@auth/core/types";
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const hasAuth = !env.AUTH_CLIENT_ID || !env.AUTH_CLIENT_SECRET || !env.AUTH_ISSUER || !env.AUTH_TRUST_HOST || !env.AUTH_SECRET ? false : true;

export const handle: Handle = sequence(
	//@ts-ignore
	SvelteKitAuth({
		providers: [
			Authentik({
				clientId: env.AUTH_CLIENT_ID,
				clientSecret: env.AUTH_CLIENT_SECRET,
				issuer: env.AUTH_ISSUER
			}) as Provider<Profile>
		]
	}),
	hasAuth ? async ({ event, resolve }) => {
		if (event.url.pathname.startsWith("/admin")) {
			const session = await event.locals.getSession();
			if (!session) {
				throw redirect(303, "/login");
			}
		}
	
		const result = await resolve(event, {
			transformPageChunk: ({ html }) => html
		});
		return result;
	} : async ({ event, resolve }) => {
		if (event.url.pathname.startsWith("/admin")) {
			throw redirect(303, "/login");
		}
	
		const result = await resolve(event, {
			transformPageChunk: ({ html }) => html
		});
		return result;
	}
);