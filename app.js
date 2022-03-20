var http = require('http');

http.createServer((req,res)=>{ //arrow function

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

    
}).listen(1337,'127.0.0.1')// this seems to start a local web instance with some simple text content

// it runs as long as you don't exit the process in the CLI

//the headers seem to contain some metadata about the page/server