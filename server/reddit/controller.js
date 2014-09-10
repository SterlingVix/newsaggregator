// var Movies = require('./modal.js');
var http  = require('http'),
    defer = require('q').defer();

module.exports = {
  fetchPosts: function(req, res, next) {
  var content = '';

  http.get('http://www.reddit.com/.json', function(redditres) {
    redditres.on('data', function(chunk) {
      content += chunk;
    });
    redditres.on('end', function() {
      res.json({data: content});
      defer.resolve(JSON.parse(content));
    });
  }).on('error', function(err) {
    defer.reject(err.message);
  });

  return defer.promise;
  }
};
