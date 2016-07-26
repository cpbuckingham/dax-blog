var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    index          = require('./routes/index'),
    api            = require('./routes/api');

// --- Middleware --- //
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'))
  .use(express.static('public'));


// --- Routing --- //

app.use('/', index)
  .use('/api', api);

// --- Server --- //
app.listen(3000, () => {
  console.log('Server is listening.');
});
