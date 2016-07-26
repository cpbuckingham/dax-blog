var express = require('express'),
    router  = express.Router();

router.route('/')
  .get((req, res) => {
    res.sendFile('index.html', {root: './public/views'});
  })
  .post((req, res) => {
    res.sendFile('index.html', {root: './public/views'});
  });


module.exports = router;
