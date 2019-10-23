//Load HTTP module

const http = require("http");
const url = "10.1.2.15";
const port = "8000";

//Create Http Server
const server = http.createServer( (request, response) => {
  //Set the response Http Header with Http status and content-type
  response.writeHead( 200, {'Content-Type': 'text/plain'} );

  // Send the response body "Hello World"
  response.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, url, () => {
  console.log(`Server running at http://${url}:${port}/`);
})