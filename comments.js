// create web server
// run node comments.js
// then go to http://localhost:3000/comments
// then go to http://localhost:3000/comments/1
// then go to http://localhost:3000/comments/2

var http = require('http');

var comments = [
    { name: 'User 1', comment: 'Comment 1' },
    { name: 'User 2', comment: 'Comment 2' },
    { name: 'User 3', comment: 'Comment 3' }
];

http.createServer(function(request, response) {
    var tmp = request.url.split('/');
    var id = parseInt(tmp[2]);
    if (isNaN(id)) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(comments));
    } else {
        if (id >= 0 && id < comments.length) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(comments[id]));
        } else {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Not found');
        }
    }
}).listen(3000);
console.log('Server running at http://localhost:3000/');

