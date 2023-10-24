import { Sequelize } from "sequelize";

export default new Sequelize("kissanmarket_local", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
