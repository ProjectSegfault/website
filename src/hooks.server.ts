import { SvelteKitAuth } from "@auth/sveltekit"
import Authentik from '@auth/core/providers/authentik';
import { env } from "$env/dynamic/private";
import statusData from "$lib/statusData";
import map from "$lib/map";

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

const updateMap = () => {
	map.set("data", {
		status: statusData,
		updated: Math.floor(Date.now() / 1000)
	});
};

updateMap();

setInterval(updateMap, 30000);