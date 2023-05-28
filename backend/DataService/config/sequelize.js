const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'kissanmarket_local',
    'root',
    "",
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);