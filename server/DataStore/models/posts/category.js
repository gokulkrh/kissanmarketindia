import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize";

const Category = sequelize.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
