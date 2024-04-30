import path from "path";
import {} from "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8",
  },
  migrations: {
    directory: path.resolve() + "/data_store/migrations",
  },
  seeds: {
    directory: path.resolve() + "/data_store/seeds",
  },
};

export const staging = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8",
  },
  migrations: {
    directory: path.resolve() + "/data_store/migrations",
  },
  seeds: {
    directory: path.resolve() + "/data_store/seeds",
  },
};

export const production = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8",
  },
  migrations: {
    directory: path.resolve() + "/data_store/migrations",
  },
  seeds: {
    directory: path.resolve() + "/data_store/seeds",
  },
};
