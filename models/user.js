var bookshelf = require('../db/bookshelf');

require('./post');

var User = bookshelf.Model.extend({
  tableName:'users',
  post: function(){
    return this.hasMany('Post')
  }
});

module.exports = bookshelf.model('User', User);
