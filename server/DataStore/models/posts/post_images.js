import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize";

const Image = sequelize.define("images", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Image;
