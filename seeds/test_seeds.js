
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogs').insert({
          blog_title: 'Seed Title 1',
          blog_body: 'Seed Post 1'
        }),
        knex('blogs').insert({
          blog_title: 'Seed Title 2',
          blog_body: 'Seed Post 2'
        }),
        knex('blogs').insert({
          blog_title: 'Seed Title 3',
          blog_body: 'Seed Post 3'
        })
      ]);
    });
};
