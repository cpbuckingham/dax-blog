var express = require('express'),
    router  = express.Router();

router.route('/signin')
  .get((req, res) => {
    // Do the thing, renders signin page, but should be handled in angular?
  })

  .post((req, res) => {
    // Do the user credentials.
  })

module.exports = router;
