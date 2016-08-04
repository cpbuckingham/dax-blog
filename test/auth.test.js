var expect  = require('chai').expect,
    app     = require('../server'),
    request = require('supertest')(app),
    knex    = require('../db/knex'),
    should  = require('should');

describe('Auth Routes', () => {
  before( done => {
    knex.migrate.latest()
      .then( () => {
        knex.seed.run()
          .then( () => {
            done();
          }); // seed
      }); // migrate
  }); // before

  after( done => {
    knex.migrate.rollback()
      .then( () => {
        done();
      });
  })

  it('Should login successfully to the server.', done => {
    var userCred = {
      username:'tester',
      password:'testtest'
    }

    request.post('/auth/login')
      .expect(302)
      .send(userCred)
      .end((err, res) => {
        done();
      })
  })
})
