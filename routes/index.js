var express = require('express'),
    router  = express.Router();

router.route('*')
  .get((req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
  });
  .post((req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
  });


module.exports = router;
