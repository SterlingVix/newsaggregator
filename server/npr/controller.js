var http  = require('http'),
    // keys  = require('../keys.js'), // Aaron commented out because it's not working...?
    defer = require('q').defer();

module.exports = {
  fetchPosts: function(req, res, next) {
    var content = '';

    // testing with id=2 (2 = "All Things Considered" category)
    http.get('http://api.npr.org/query?id=2&output=JSON&apiKey=' + keys.npr, function(nprRes) {
      nprRes.on('data', function(chunk) {
        content += chunk;
      });
      nprRes.on('end', function() {
        res.json({data: content});
        defer.resolve(JSON.parse(content));
      });
    }).on('error', function(err) {
      defer.reject(err.message);
    });

    return defer.promise;
  }
};