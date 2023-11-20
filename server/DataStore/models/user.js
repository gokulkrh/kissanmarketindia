import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define('users', {
  user_pid: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
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
  date_joined: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default User;
