import { env } from "$env/dynamic/private";
import axios from "axios";
import { Agent } from "https";

const agent = new Agent({
	family: 4
});

const fetchGhost = async (action: string, additional?: string) => {
	try {
		const request = await axios(
			env.GHOST_URL +
				"/ghost/api/content/" +
				action +
				"/?key=" +
				env.GHOST_API_KEY +
				"&include=authors,tags&limit=all&formats=html,plaintext" +
				(additional ? additional : ""),
			{ httpsAgent: agent }
		);

		if (request.status === 200) {
			return request.data;
		} else {
			return { error: true, message: "Error: " + request.status };
		}
	} catch (err) {
		return { error: true, message: "Error: " + err };
	}
};

export default fetchGhost;
