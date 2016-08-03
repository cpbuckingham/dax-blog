var supertest = require('supertest'),
    should    = require('should'),
    server    = supertest.agent('http://localhost:3000'),
    knex      = require('../db/knex');




describe('#Index Route', () => {
  before(done => {
    knex.migrate.latest()
      .then( results => {
        knex.seed.run()
          .then (results => {
            done();
          })
      })
  })

  after(done => {
    knex.migrate.rollback()
      .then( results => {
        done();
      })
  })

  it('Should return home page.', done => {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});

describe('#Post Routes', () => {

  before( () => {
    // Run knex migrations.
    // Populate the database, run seed.
  });

  after( () => {
    // Roll back migration.
  });

  it('Should return array of posts.', done => {
    server
      .get('/api/posts')
      .expect('Content-type',/json/)
      .expect(200)
      .end((err, res) => {
        (res.body.length).should.be.aboveOrEqual(0);
        done();
      })
  })

  it('Should return a single post.', done => {
    server
      .get('/api/posts/1')
      .expect('Content-type',/json/)
      .expect(200)
      .end((err, res) => {
        (typeof res.body).should.equal('object');
        done();
      });
  });

  it('Should not return a post.', done => {
    server
      .get('/api/posts/0')
      .expect('Content-type',/json/)
      .expect(500)
      .end((err, res) => {
        done();
      });
  });
});
