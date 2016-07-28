var supertest = require('supertest'),
    should    = require('should'),
    server    = supertest.agent('http://localhost:3000');

describe('#Index Route', () => {
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
      })
  })
})
