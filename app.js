let http = require('http');

console.log("starting server");
http.createServer((request,response) => {
    console.log("Request received");
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("test response");
    response.end();
}).listen(8080);

console.log("Server started");
