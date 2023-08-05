import { SvelteKitAuth } from "@auth/sveltekit";
import Authentik from "@auth/core/providers/authentik";
import { env } from "$env/dynamic/private";
import type { Provider } from "@auth/core/providers";
import type { Profile } from "@auth/core/types";
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import {
	announcements,
	pubnixUsers,
	blogPosts,
	blogTags,
	blogAuthors
} from "./stores";
import axios from "axios";
import { Agent } from "https";

const agent = new Agent({
	family: 4
});

const hasAuth =
	!env.AUTH_CLIENT_ID ||
	!env.AUTH_CLIENT_SECRET ||
	!env.AUTH_ISSUER ||
	!env.AUTH_TRUST_HOST ||
	!env.AUTH_SECRET
		? false
		: true;

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
	hasAuth
		? async ({ event, resolve }) => {
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
		  }
		: async ({ event, resolve }) => {
				if (event.url.pathname.startsWith("/admin")) {
					throw redirect(303, "/login");
				}

				const result = await resolve(event, {
					transformPageChunk: ({ html }) => html
				});
				return result;
		  }
);

export const fetchGhost = async (action: string, additional?: string) => {
	return await axios(
		env.GHOST_URL +
			"/ghost/api/content/" +
			action +
			"/?key=" +
			env.GHOST_API_KEY +
			"&include=authors,tags&limit=all&formats=html,plaintext" +
			(additional ? additional : ""),
		{ httpsAgent: agent, timeout: 10000 }
	);
};

const updateMap = async () => {
	try {
		const res = await axios(env.KUMA_URL, {
			httpsAgent: agent,
			timeout: 10000
		});

		if (res.status === 200) {
			announcements.set(res.data);
		} else {
			announcements.set({ error: true, message: "Error: " + res.status });
		}
	} catch (err) {
		announcements.set({ error: true, message: "Error: " + err });
	}

	try {
		const res = await axios("https://publapi.p.projectsegfau.lt/users", {
			httpsAgent: agent,
			timeout: 10000
		});

		if (res.status === 200) {
			pubnixUsers.set(res.data);
		} else {
			pubnixUsers.set({ error: true, message: "Error: " + res.status });
		}
	} catch (err) {
		pubnixUsers.set({ error: true, message: "Error: " + err });
	}

	try {
		const res = await fetchGhost("posts");

		if (res.status === 200) {
			blogPosts.set(res.data);
		} else {
			blogPosts.set({ error: true, message: "Error: " + res.status });
		}
	} catch (err) {
		blogPosts.set({ error: true, message: "Error: " + err });
	}

	try {
		const res = await fetchGhost("tags");

		if (res.status === 200) {
			blogTags.set(res.data);
		} else {
			blogTags.set({ error: true, message: "Error: " + res.status });
		}
	} catch (err) {
		blogTags.set({ error: true, message: "Error: " + err });
	}

	try {
		const res = await fetchGhost("authors");

		if (res.status === 200) {
			blogAuthors.set(res.data);
		} else {
			blogAuthors.set({ error: true, message: "Error: " + res.status });
		}
	} catch (err) {
		blogAuthors.set({ error: true, message: "Error: " + err });
	}
};

updateMap();

setInterval(updateMap, 30000);
