var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server;

var config = require('./config.js');
var knex = require('knex')(config.knex);
var Model = require('objection').Model;

var routes = require('./routes/index.js');

//binds all models across app to knex instance
Model.knex(knex);

//...........Middleware.................
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('json spaces', 2);
app.use(express.static('public'));
app.use(routes);




// Error handling.
app.use(function (err, req, res, next) {
  console.log(err);
  if (err) {
    res.status(err.statusCode || err.status || 500)
      .send({error: err.data} || {error: err.message} || {});
  } else {
    next();
  }
});


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('/public/index.html', { root: __dirname });
});

server = app.listen(3000, function () {
  console.log('Example app listening at port %s', server.address().port);
});


