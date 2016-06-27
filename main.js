var http = require("http");

http.createServer(function(request, response) {

  //Send the HTTP header
  //HTTP Status: 200 : OK
  //Content Type: text/plain
  response.writeHead(200, {"Content-Type": "text/plain"});

  //Send the response body as whatever is in quotes
  response.end("I am a website!\nMy name is Peter Ciporin!");


}).listen(8081);

//Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
