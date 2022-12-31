import { Sequelize, DataTypes } from "sequelize";
import consola from "consola";
import { env } from "$env/dynamic/private";

const sequelize = new Sequelize({
	database: "website",
	password: String(env.DB_PASSWORD),
	port: Number(env.DB_PORT),
	host: String(env.DB_HOST),
	dialect: "postgres",
	username: String(env.DB_USERNAME),
});

sequelize.define("Announcements", {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	severity: {
		type: DataTypes.STRING,
		allowNull: false
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	link: {
		type: DataTypes.STRING,
		allowNull: true
	},
	created: {
		type: DataTypes.BIGINT,
		allowNull: false
	}
});

sequelize.define("Posts", {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	tags: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	created: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	updated: {
		type: DataTypes.BIGINT,
		allowNull: true,
		defaultValue: null
	},
	words: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	readingTime: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
});

try {
	await sequelize.authenticate();
	await sequelize.sync();
	consola.success("Connected to Postgres");
} catch (error) {
	consola.error("Failed to connect to Postgres:", error);
}

export default sequelize;