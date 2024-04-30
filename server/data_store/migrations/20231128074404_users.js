/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("users", function (table) {
    table.string("user_id").notNullable().primary();
    table.string("fullname").notNullable();
    table.string("password").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable().unique();
    table.string("profile_pic_url").defaultTo("");
    table.boolean("send_marketing_emails").defaultTo(true);
    table.boolean("is_email_verified").defaultTo(false);
    table.boolean("is_phone_verified").defaultTo(false);
    table.boolean("is_deleted").defaultTo(false);
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("users");
}
