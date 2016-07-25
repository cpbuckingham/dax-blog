var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override');

// --- Middleware --- //
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'))
  .use(express.static('public'));


// --- Routing --- //

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html")
});

// --- Server --- //
app.listen(3000, () => {
  console.log('Server is listening.');
});
