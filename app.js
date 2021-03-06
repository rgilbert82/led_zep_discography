var static = require('node-static');
var http = require('http');

var fileServer = new static.Server('./public');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, result) {
          console.log(request.url);
            if (err) {
                console.error("Error serving " + request.url + " - " + err.message);

                // Respond to the client
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }).resume();
}).listen(process.env.PORT || 3000);

//  sInstalled jasmine-node, node-static, and nodemon dependencies
//  Start server with: npm start
//  Run tests with: jasmine-node spec, or npm test
