var http = require('http');

http.createServer(function(req, resp){
	resp.writeHead(200, {'Content-Type': 'text/plain'});
  	resp.end('Hello World\n');
}).listen("8080", '0.0.0.0');

console.log("listen ing on 8080");