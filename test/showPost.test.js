var expect  = require('chai').expect,
    app     = require('../server'),
    request = require('supertest')(app),
    knex    = require('../db/knex'),
    should  = require('should');


describe('Route Test', () => {

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

  describe('/', () => {

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

  describe('/api/posts', () => {


    it('Should return array of posts.', done => {
      request
        .get('/api/posts')
        .expect(200)
        .end((err, res) => {
          var post = res.body;
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
          var post = res.body;
          (post).should.have.property('blog_title', 'Seed Title 1');
          (post).should.have.property('blog_body', 'Seed Post 1');
          done();
        });
    });

    it('Should post a new blog.', done => {
      var newPost = {blog_title:'Test', blog_body:'Test'};

      request
        .post('/api/posts')
        .expect(200)
        .send(newPost)
        .end((err, res) => {
          request
            .get(`/api/posts/${res.body.id}`)
            .expect(200)
            .end((err, res) => {
              var post = res.body;
              (post).should.have.property('blog_title', 'Test');
              (post).should.have.property('blog_body', 'Test');
              done();
            });
        });
    });

    it('Should edit an existing blog.', done => {
      var editPost = {blog_title:'Test', blog_body:'Test'};

      request
        .put('/api/posts/1')
        .expect(200)
        .send(editPost)
        .end((err, res) => {
          request
            .get('/api/posts/1')
            .expect(200)
            .end((err, res) => {
              var post = res.body;
              (post).should.have.property('blog_title', 'Test');
              (post).should.have.property('blog_body', 'Test');
              done();
            })
        })
    })
  });

  it('Should delete an existing blog.', done => {
    request
      .delete('/api/posts/3')
      .expect(200)
      .end((err, res) => {
        var post = res.body;
        done();
      })
  })
});
