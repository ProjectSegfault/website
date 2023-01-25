import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types"

export const load = (async ({ locals }) => {
	const meta = {
		title: "Login"
	}

	const hasAuth = !env.AUTH_CLIENT_ID || !env.AUTH_CLIENT_SECRET || !env.AUTH_ISSUER || !env.AUTH_TRUST_HOST || !env.AUTH_SECRET ? false : true;

	return {
		session: hasAuth ? await locals.getSession() : undefined,
		hasAuth,
		...meta
	}
}) satisfies PageServerLoad;