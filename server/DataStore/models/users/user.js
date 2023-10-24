import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize";

const User = sequelize.define("user", {
  user_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  joined_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  is_deleted: {
    type: Boolean,
    defaultValue: false,
  },
});

export default User;
