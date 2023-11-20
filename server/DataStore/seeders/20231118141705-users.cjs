'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        user_pid: "gokulkrh808618",
        username: "mvr33",
        fullname: "Max Verstappen",
        password: "password",
        email: "gokulkrh@gmail.com",
        phone: "8086183925",
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
