var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();

    }
);

server.listen(5000); //6 - listen for any incoming requests
