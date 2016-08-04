var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    bookshelf      =
    index          = require('./routes/index'),
    api            = require('./routes/api'),
    auth           = require('./routes/auth');

require('dotenv');

// --- Middleware --- //
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'))
  .use(express.static('public'));


// --- Routing --- //

app.use('/api', api)
  .use('/auth', auth)
  .use('/', index);

// --- Server --- //
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
});


module.exports = app;
