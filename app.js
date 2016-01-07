var router = require('./router.js');

//Create web server
var http = require('http');
http.createServer(function(request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080');


