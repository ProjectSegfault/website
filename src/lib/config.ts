import { parse } from "yaml";
import fs from "fs";

interface Config {
	db: {
		url: string;
	};
	app: {
		auth: {
			clientId: string;
			clientSecret: string;
			issuer: string;
		}
		hcaptcha: {
			secret: string;
			sitekey: string;
		};
		webhook: string;
	};
}

const config: Config = parse(fs.readFileSync("./config/config.yml", "utf8"));

export default config;