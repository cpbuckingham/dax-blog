var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/post');


router.route('/posts')
  .get((req, res) => {
    Post.getAll().then(results => {
      res.json(results.toJSON());
    })
  })


router.route('/posts/:post_id')
  .get((req, res) => {
    Post.getOne(req.params.post_id).then( results => {
      res.json(results.toJSON());
    })
  })

module.exports = router;
