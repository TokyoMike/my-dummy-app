const http = require('http');
var querystring = require('querystring');
const request = require('request')



var koSanOutput = ''
request.get('https://blooming-fortress-29641.herokuapp.com/testtest',
 (error, res, body) => {
  if (error) {
    console.log('second request');
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log('successful second request')
  console.log(body)
  koSanOutput = body
})


 hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(koSanOutput);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
