
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments().primary().index(),
    table.string('full_name'),
    table.string('username'),
    table.text('img_url'),
    table.text('password'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
