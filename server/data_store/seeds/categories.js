/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("categories").del();
  await knex("categories").insert([
    {
      name: "Vegetable & Fruits",
      image_url:
        "http://localhost:5000/images/categories/Vegetable-&-Fruits.jpg",
    },
    {
      name: "Root Vegetables",
      image_url: "http://localhost:5000/images/categories/Root-Vegetables.jpg",
    },
    {
      name: "Grains",
      image_url: "http://localhost:5000/images/categories/Grains.jpg",
    },
    {
      name: "Animals & Pets",
      image_url: "http://localhost:5000/images/categories/Animals-&-Pets.jpg",
    },
    {
      name: "Honey Farmer Products",
      image_url:
        "http://localhost:5000/images/categories/Honey-Farmer-Products.jpg",
    },
    {
      name: "Fish Farmer Products",
      image_url:
        "http://localhost:5000/images/categories/Fish-Farmer-Products.jpg",
    },
    {
      name: "Vanavasi & Handicraft",
      image_url:
        "http://localhost:5000/images/categories/Vanavasi-&-Handicraft.jpg",
    },
    {
      name: "Plants & Seeds",
      image_url: "http://localhost:5000/images/categories/Plants-&-Seeds.jpg",
    },
    {
      name: "Other Products",
      image_url: "",
    },
  ]);
}
