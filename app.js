const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.write('<h1>Hello from nodejs</h1>');
    } else {
        res.write("<h1>You have entered invalid url</h1>");
    }
    res.end();
});

server.listen(8080,() => {
    console.log("The server is listening on port 8080");
    // ppp    
    
    
});