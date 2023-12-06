const names = require('./name.js');
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Welcome to our new node project');
  res.end();
});
console.log(names.John);

const os = require('os');
console.log(os.userInfo());

server.listen(5000);

// listening on port 5000