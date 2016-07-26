
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs',table => {
    table.increments().primary().index,
    table.text('blog_title'),
    table.text('blog_body'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs');
};
