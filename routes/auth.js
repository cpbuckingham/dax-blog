var express  = require('express'),
    router   = express.Router(),
    passport = require('passport');

router.route('/login')
  .post(passport.authenticate('local', {
    failureRedirect: '/auth/login'
  }), (req, res) => {
    res.redirect('/blog');
  });

module.exports = router;
