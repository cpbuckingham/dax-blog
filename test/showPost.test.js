var expect = require('chai').expect;
var app = require('../server')
var request = require('supertest')(app);
var knex = require('../db/knex');
var should = require('should');



describe('#Index Route', () => {

  it('Should return home page.', done => {
    request
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});

describe('#Post Routes', () => {

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

  it('Should return array of posts.', done => {
    request
      .get('/api/posts')
      .expect(200)
      .end((err, res) => {
        var post = res.body;
        expect(res.body.length).to.eq(3);
        (post[0]).should.have.property('blog_title', 'Seed Title 1');
        (post[0]).should.have.property('blog_body', 'Seed Post 1');
        done();
      })
  })

  it('Should return a single post.', done => {
    request
      .get('/api/posts/1')
      .expect('Content-type',/json/)
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});
