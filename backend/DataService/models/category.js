const { DataTypes } = require('sequelize')
const sequelize = require('../config').development

module.exports = (sequelize) => {
    const categories = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return categories;
}