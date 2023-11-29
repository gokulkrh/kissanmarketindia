/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('categories').del()
  await knex('categories').insert([
    {
      name: "Vegetable & Fruits",
      image_url: "http://localhost:8000/categories/Vegetable-&-Fruits.jpg",
    },
    {
      name: "Root Vegetables",
      image_url: "http://localhost:8000/categories/Root-Vegetables.jpg",
    },
    {
      name: "Grains",
      image_url: "http://localhost:8000/categories/Grains.jpg",
    },
    {
      name: "Animals & Pets",
      image_url: "http://localhost:8000/categories/Animals-&-Pets.jpg",
    },
    {
      name: "Honey Farmer Products",
      image_url: "http://localhost:8000/categories/Honey-Farmer-Products.png",
    },
    {
      name: "Fish Farmer Products",
      image_url: "http://localhost:8000/categories/Fish-Farmer-Products.jpg",
    },
    {
      name: "Vanavasi & Handicraft",
      image_url: "http://localhost:8000/categories/Vanavasi-&-Handicraft.jpg",
    },
    {
      name: "Plants & Seeds",
      image_url: "http://localhost:8000/categories/Plants-&-Seeds.jpg",
    },
    {
      name: "Other Products",
      image_url: "",
    },
  ]);
}
