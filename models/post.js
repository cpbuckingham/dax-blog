var bookshelf = require('../db/bookshelf');

require('./user');


var Post = bookshelf.Model.extend({
  tableName:'blogs',
  user: function(){
    return this.belongsTo('User')
  }
})

Post.getAll = function(){
  return new Promise((resolve, reject) => {
    Post.fetchAll().then(results => {
      resolve(results)
    })
  })
}

Post.getOne = function(post_id){
  return new Promise((resolve, reject) => {
    Post
      .where('id', post_id)
      .fetch()
      .then( results => {
        resolve(results);
      })
  })
}

module.exports = bookshelf.model('Post', Post)
