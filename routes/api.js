var express = require('express'),
    router  = express.Router();

require('../models/post');

router.route('/')
  .get((req, res) => {
    Post.getAll().then(results=>{res.json(results.toJSON())});
  });
module.exports = router;
