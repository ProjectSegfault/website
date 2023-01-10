import knex from "knex";
import type { Knex } from "knex";
import { env } from "$env/dynamic/private";
import { building } from "$app/environment";

export let db: Knex;

if (!building) {
	db = knex({
		client: "pg",
		connection: {
			host: String(env.DB_HOST),
			port: Number(env.DB_PORT),
			user: String(env.DB_USERNAME),
			password: String(env.DB_PASSWORD),
			database: "website"
		}
	})

	if (! await db.schema.hasTable("Announcements")) {
		await db.schema.createTable("Announcements", (table) => {
			table.increments("id");
			table.specificType("title", "varchar").notNullable();
			table.string("severity").notNullable();
			table.string("author").notNullable();
			table.string("link").nullable();
			table.bigInteger("created").notNullable();
			table.timestamps(true, true, true);
		});
	}
}