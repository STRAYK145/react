/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('Products', function (table) {
        table.increments('id').primary(); // autoIncrement + primaryKey
        table.string('name').notNullable();
        table.text('description');
        table.string('image');
        table.float('price').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('Products');
};