var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/post');


router.route('/posts')
  .get((req, res) => {
    Post.getAll().then(results =>{
      res.send(results.toJSON());
    });
  });
module.exports = router;
