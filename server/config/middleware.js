var bodyParser = require('body-parser');

module.exports = function (app, express) {

  // Middleware dependencies used in routes
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(path.join(__dirname, '/../../client')));

  // Each api gets its own router
  var redditRouter = express.Router();
  var nprRouter = express.Router();

};