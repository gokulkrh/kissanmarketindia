import { development, staging, production } from "../knexfile.js";
import knex from "knex";

const env = process.env.ENVIRONMENT || "development";
let config;

switch (env) {
  case "production":
    config = production;
    break;
  case "staging":
    config = staging;
    break;
  default:
    config = development;
}
const db = knex(config);

export default db;
