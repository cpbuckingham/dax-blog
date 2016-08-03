var supertest = require('supertest'),
    should    = require('should'),
    server    = supertest.agent('http://localhost:3000');




describe('#Index Route', () => {
  before(){
    // Start server?
  }

  after(){
    // End server.
  }

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
