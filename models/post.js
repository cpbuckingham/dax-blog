var bookshelf = require('../db/bookshelf');

var Post = bookshelf.Model.extend({
  tableName:'posts'
})

Post.getAll = function(){
  return new Promise((resolve, reject) => {
    Post.fetchAll().then(results => {
      resolve(results);
    })
  })
}

module.exports = bookshelf.model('Post', Post)