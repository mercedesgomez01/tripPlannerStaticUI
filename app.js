var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var models = require('./models/index') //comes with Place and Hotel models that we have yet to set up.

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.use('/', routes);

//logging server requests to the console with a send to the browser.
app.get('/', function(req, res) {
  var message = 'Lets get exploring';
  res.send(message);
});

//error handling
app.use(function(req, res, next) {
  var err = new Error('Oops, Your Page Was Not Found');
  err.status = 404;
  next(err);
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
             //render out the error html page
     )
  res.send(err, err.stack)
})

app.listen(3000, function(){
  console.log("Listening on 3000")
})
