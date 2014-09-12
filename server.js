var app = require('./server/server.js');

var port = process.env.PORT || 8080;
var url = process.env.URL || 'localhost';

app.listen(port, url);

console.log('Listening on', url, ':', port);