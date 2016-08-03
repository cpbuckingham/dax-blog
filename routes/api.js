var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/post');


router.route('/posts')
  .get((req, res) => {
    Post.getAll().then(results => {
      res.json(results.toJSON());
    })
  })

  //TODO: Refactor to method of post.
  .post((req, res) => {
    new Post({
      blog_title:req.body.blog_title,
      blog_body:req.body.blog_body,
    }).save()
      .then(results => {
        res.json(results.toJSON());
      })
  })


router.route('/posts/:post_id')
  .get((req, res) => {
    Post.getOne(req.params.post_id).then( results => {
      res.json(results.toJSON());
    })
  })
  .put((req, res) => {
    Post.forge('id',req.params.post_id)
      .fetch({require:true})
      .then(post => {
        post.save({
          blog_title:req.body.blog_title,
          blog_body:req.body.blog_body
        }).then( results => {
          res.json(results.toJSON());
        })
      })
  })
  .delete((req, res) => {
    Post.getOne(req.params.post_id)
      .then( post => {
        post.destroy()
          .then( results => {
            res.json(results.toJSON());
          })
      })
  })
module.exports = router;
