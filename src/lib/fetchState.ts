let state: any = [];
export default async function fetchState(module: "announcements" | "form") {
	const url = `https://segfautils.projectsegfau.lt/api/set/${module}`;
	const response = await fetch(url);
	state = await response.json();
	return state;
}
