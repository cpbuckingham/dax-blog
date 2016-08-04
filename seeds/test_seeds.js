
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
    }).then(function(){
      return knex('users').insert({
        full_name:'Some Dude',
        username: 'tester',
        img_url:'http://fillmurray.com/200/200',
        password:'$2a$08$bjOFersE7D36g2SPn77AsO5OK/EIjqPjHKBV4wUzJvv8XqCeMltTu' // 8 hash, daxdax
      })
    });
};
