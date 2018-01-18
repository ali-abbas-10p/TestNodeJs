let http = require('http');


http.createServer((request,response) => {
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("test response");
    response.end();
}).listen(8080);