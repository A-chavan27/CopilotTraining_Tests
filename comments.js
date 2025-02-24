// create web server
const http = require('http');
const fs = require('fs');

// create server
http.createServer((req, res) => {
    // read file
    fs.readFile('comments.html', 'utf-8', (err, data) => {
        // send response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);

console.log('Server is running at http://localhost');