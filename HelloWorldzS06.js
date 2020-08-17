var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><title>Hello World</title><body><p>Hello World, my page was all wrong before, I feel better now.</p></body></html>');
        res.end();

    }
);

server.listen(5000); //6 - listen for any incoming requests
