import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Post = sequelize.define("posts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  place_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  home_delivery: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  // isDeleted: {
  //   type: Boolean,
  //   defaultValue: false,
  // },
});

export default Post;
