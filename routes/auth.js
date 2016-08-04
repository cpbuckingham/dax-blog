var express  = require('express'),
    router   = express.Router(),
    passport = require('passport');

router.route('/login')
  .get((req, res) => {
    // Do the thing, renders signin page, but should be handled in angular?
  })

  .post(passport.authenticate('local', {
    failureRedirect: '/auth/login'
  }), (req, res) => {
    res.redirect('/');
  });

module.exports = router;
