var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    passport       = require('passport'),
    passportLocal  = require('passport-local'),
    bcrypt         = require('bcrypt'),
    cookieSession  = require('cookie-session'),
    index          = require('./routes/index'),
    api            = require('./routes/api'),
    auth           = require('./routes/auth');

require('dotenv');

// --- Middleware --- //
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'))
  .use(express.static('public'));


// --- Passport Strategy --- //
passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
	session: false
}, (username, password, done) => {
	// Check id of user, retrieve row in users table.
	Users().where('username', username)
		.first()
		.then( user => {
			// compareSync the user's hashed password.
			if (user && bcrypt.compareSync(password, user.password)){
				// On match, return confirmation of session.
				return done(null, user);
			}
			// Otherwise, return no session, redirect.
			return done(null, false);
		})
}));

// --- Routing --- //

app.use('/api', api)
  .use('/auth', auth)
  .use('/', index);

// --- Server --- //
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
});


module.exports = app;
