var bodyParser = require('body-parser');

module.exports = function (app, express) {

  // Middleware dependencies used in routes
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));
  

  // Each api gets its own router
  var routers = {};
  routers.reddit = express.Router();
  routers.npr    = express.Router();

  app.use('/api/reddit', routers.reddit);
  app.use('/api/npr', routers.npr);

  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  require('../reddit/routes.js')(routers.reddit);
  require('../npr/routes.js')(routers.npr);

};