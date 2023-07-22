const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

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
});

module.exports = Post;
