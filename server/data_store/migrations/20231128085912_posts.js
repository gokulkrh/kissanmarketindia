/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("posts", function (table) {
    table.string("post_id").notNullable().primary();
    table.string("title").notNullable();
    table.string("category").defaultTo("others");
    table.string("description", 512);
    table.string("thumbnail_url");
    table.float("price").notNullable();
    table.float("quantity").notNullable();
    table.boolean("home_delivery").defaultTo(false);
    table.integer("views");
    table.integer("pincode").notNullable();
    table.string("place").notNullable();
    table.float("latitude").notNullable();
    table.float("longitude").notNullable();
    table.boolean("is_active").defaultTo(true);
    table.boolean("is_deleted").defaultTo(false);
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("posts");
}
