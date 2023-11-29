/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('users', function(table) {
        table.string('user_id').notNullable().primary();
        table.string('username').notNullable();
        table.string('fullname').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable().unique();
        table.string('phone').notNullable().unique();
        table.boolean('is_deleted').defaultTo(false);
        table.timestamps(true, true)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('users');
};
