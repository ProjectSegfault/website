import { fetchGhost as func } from "../../hooks.server";

const fetchGhost = async (action: string, additional?: string) => {
	try {
		const request = await func(action, additional);

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
