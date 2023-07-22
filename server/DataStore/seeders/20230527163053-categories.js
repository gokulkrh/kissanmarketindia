"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Vegetable & Fruits",
        img_url: "http://localhost:8000/categories/Vegetable-&-Fruits.jpg",
      },
      {
        name: "Root Vegetables",
        img_url: "http://localhost:8000/categories/Root-Vegetables.jpg",
      },
      {
        name: "Grains",
        img_url: "http://localhost:8000/categories/Grains.jpg",
      },
      {
        name: "Animals & Pets",
        img_url: "http://localhost:8000/categories/Animals-&-Pets.jpg",
      },
      {
        name: "Honey Farmer Products",
        img_url: "http://localhost:8000/categories/Honey-Farmer-Products.png",
      },
      {
        name: "Fish Farmer Products",
        img_url: "http://localhost:8000/categories/Fish-Farmer-Products.jpg",
      },
      {
        name: "Vanavasi & Handicraft",
        img_url: "http://localhost:8000/categories/Vanavasi-&-Handicraft.jpg",
      },
      {
        name: "Plants & Seeds",
        img_url: "http://localhost:8000/categories/Plants-&-Seeds.jpg",
      },
      {
        name: "Other Products",
        img_url: "",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
