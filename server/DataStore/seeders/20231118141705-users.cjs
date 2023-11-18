'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        user_name: "mvr33",
        full_name: "Max Verstappen",
        password: "password",
        email: "gokulkrh@gmail.com",
        phone: "8086183925",
        date_joined: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
