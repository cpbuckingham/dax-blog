var bookshelf = require('../db/bookshelf');

var Post = bookshelf.Model.extend({
  tableName:'blogs'
})

Post.getAll = function(){
  return new Promise((resolve, reject) => {
    Post.fetchAll().then(results => {
      console.log('What up.');
      resolve(results)
    })
  })
}

module.exports = bookshelf.model('Post', Post)
