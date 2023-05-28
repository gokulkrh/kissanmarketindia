'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type:Sequelize.STRING,
        allowNull: false
      },
      img_url: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
