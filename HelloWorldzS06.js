var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><title>Hello World</title><body><p>Hello World, this is an untagged version.</p></body></html>');
        res.end();

    }
);

server.listen(5000); //6 - listen for any incoming requests
