import { env } from "$env/dynamic/private";
import { building } from "$app/environment";
import { MongoClient } from "mongodb";
import type { Db } from "mongodb";

export let db: Db;

if (!building) {
	const client = new MongoClient(env.DB_URL);

	await client.connect();

	db = client.db("website");
}