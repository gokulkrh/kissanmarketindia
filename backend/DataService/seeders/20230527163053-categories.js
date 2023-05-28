'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('categories', [
    {
      name: "Vegetable & Fruits",
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Vegetable-&-Fruits.jpg'
    },
    {
      name: 'Root Vegetables',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Root-Vegetables.jpg'
    },
    {
      name: 'Grains',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Grains.jpg'
    },
    {
      name: 'Animals & Pets',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Animals-&-Pets.jpg'
    },
    {
      name: 'Honey Farmer Products',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Honey-Farmer-Products.png'
    },
    {
      name: 'Fish Farmer Products',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Fish-Farmer-Products.jpg'
    },
    {
      name: 'Vanavasi & Handicraft',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Vanavasi-&-Handicraft.jpg'
    },
    {
      name: 'Plants & Seeds',
      img_url: '/home/gokul/Projects/kissanmarketindia/images/categories/Plants-&-Seeds.jpg'
    },
    {
      name: 'Other Products',
      img_url: ''
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
