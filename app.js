var express = require('express');
var app = express();
// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */
app.get('/', function(req, res) {
	res.sendFile('/views/index.html', { root: __dirname });
});

/** 3) Serve an HTML file */
app.use(express.static(__dirname + '/public'));
/** 4) Serve static assets  */

/** 5) serve JSON on a specific route */
/*app.get('/json', function(req, res){
  res.json({"message": "Hello json"});
})
*/
/** 6) Use the .env file to configure the app */

let messageObject = { message: 'Hello json' };

app.get('/json', jsonHandler);

function jsonHandler(req, res) {
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		messageObject.message = messageObject.message.toUpperCase();
	}
	return res.json(messageObject);
}
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

module.exports = app;
