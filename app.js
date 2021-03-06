const request = require('request')
koSanOutput = ''
request.get('https://blooming-fortress-29641.herokuapp.com/Random string three to be sent',
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

//  TEST1
var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        //res.write(html);
        // res.setHeader('Content-Type', 'text/plain');
        res.end(koSanOutput);
        //res.end()

    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
