var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/post');


router.route('/posts')
  .get((req, res) => {
    Post.getAll().then(results =>{
      res.send(results.toJSON());
    });
  })
  .post((req, res) => {
    // Handle posting a new blog post.
  });

router.route('/posts/:post_id')
  .get((req, res) => {
    
  })

module.exports = router;
