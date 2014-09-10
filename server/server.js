var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var Q = require('q');

var dbRequest = require('./db/dbRequestHandler.js');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client')));

// This could, and should, become a cron job or other
// external daemon
setInterval(function() {
  dbRequest.automaticApiAggregation();
}, 5000);

// This handles requests to our users table
app.post('/api/users', function(req, res) {
});

// This handles database calls to our aggregated content table
app.get('/api/content', function(req, res) {
  dbRequest.deliverContent().then(function(data) {
  	res.status(200).send(data);
  });
});


// redirect all other request to root
app.get('/*', function(req, res) {
  res.redirect('/');
});

var port = process.env.PORT || 8080;

app.listen(port);


/*

  var express = require('express'),
      db      = require('./db/dbSchema.js');

  var app = express();

  mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly

  // configure our server with all the middleware and and routing
  require('./config/middleware.js')(app, express);

  // export our app for testing and flexibility, required by index.js
  module.exports = app;

 */