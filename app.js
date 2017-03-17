var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var models = require('./models/index') ;//comes with Place and Hotel models that we have yet to set up.
var nunjucks = require('nunjucks');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var env = nunjucks.configure('views', { noCache: true }); //don't need lines 10-15 for the test
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(morgan('dev'))

//setting the static path up, serving up static files in public
//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

//logging server requests to the console with a send to the browser.
//////this I got from looking it up in the morgan docs
app.get('/', function(req, res) {
  var message = 'Lets get exploring';
  res.send(message);
});

//checking that the server can parse json bodies:
////this I got from looking it up in the body parser docs
app.get('/place', bodyParser.json(), function (req, res) {
  var placeMadeUp = {
    name: 'Times Square',
    city: 'NYC'
  };
  res.json(placeMadeUp);
});

app.get('/public', function(req, res, next){
  res.render('index');
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
