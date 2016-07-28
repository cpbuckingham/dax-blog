// Update with your config settings.



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
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection:{
      database:'postgres://cyodwcukraxeyp:TwJ3ZdvX-j5uP7vzcxKwnSeGsV@ec2-54-243-62-211.compute-1.amazonaws.com:5432/djep3s037beoc';
    },
    pool:{
      min:0,
      max:10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
