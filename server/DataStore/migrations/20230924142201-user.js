"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("users", {
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    joined_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
}
export async function down(queryInterface, Sequelize) {}
