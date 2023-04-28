// ES6 MODULE
import { createServer } from 'node:http';

const port = 6499;

const server = createServer(function (require, response) {
  response.write('Hello Node');
  response.end();
});

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port); // Tells us what port our server is listening on
  }
});
