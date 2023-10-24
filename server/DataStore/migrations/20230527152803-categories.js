"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    // createdAt: {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    // },
    // updatedAt: {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    // },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("categories");
}
