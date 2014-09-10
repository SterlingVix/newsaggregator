var controller = require('./controller.js');

module.exports = function(app) {
  app.route('/').get(controller.fetchPosts);
};