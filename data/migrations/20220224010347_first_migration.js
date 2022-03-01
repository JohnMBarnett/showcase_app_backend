/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("todos", (table) => {
    table.increments("todo_id");
    table.string("todo_name").notNullable();
    table.string("profile_id");
    table.string("todo_description");
    table.boolean("todo_status").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todos");
};
