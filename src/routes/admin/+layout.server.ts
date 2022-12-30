import type { LayoutServerLoad } from "./$types"
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!await locals.getSession()) {
		throw redirect(302, "/login");
	}
}
