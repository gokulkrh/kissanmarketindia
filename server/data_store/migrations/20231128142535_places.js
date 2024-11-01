/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("places", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable;
    table.double("latitude").notNullable;
    table.double("longitude").notNullable;
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("places");
}
