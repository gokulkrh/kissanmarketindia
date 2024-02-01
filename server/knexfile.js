import path from "path";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "kissanmarket_local",
    charset: "utf8",
  },
  migrations: {
    directory: path.resolve() + "/DataStore/migrations",
  },
  seeds: {
    directory: path.resolve() + "/DataStore/seeds",
  },
};

export const staging = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "kissanmarket_local",
    charset: "utf8",
  },
  migrations: {
    directory: path.resolve() + "/DataStore/migrations",
  },
  seeds: {
    directory: path.resolve() + "/DataStore/seeds",
  },
};

export const production = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "kissanmarket_local",
    charset: "utf8",
  },
  migrations: {
    directory: path.resolve() + "/DataStore/migrations",
  },
  seeds: {
    directory: path.resolve() + "/DataStore/seeds",
  },
};
