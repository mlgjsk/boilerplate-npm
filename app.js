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
