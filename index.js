var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/spring') {
        fs.readFile('./index.html', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write('<img src="https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="spring-photo">');
            response.end();
    }
});

server.listen(8080);