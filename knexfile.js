// Update with your config settings.

const URL_CONN = `${process.env.HEROKU_POSTGRESQL_COBALT_URL}?ssl=true`

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'dax_blog'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection:{
      database:URL_CONN
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
