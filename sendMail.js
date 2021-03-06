
var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
 /**/
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var util = require('util');
// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


//support access-control-allow-origin or cross platform 
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
 
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      //res.send(200);
      res.status(200).end();
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);




app.post('/sendMail', function(request, response){
		try {

				var senderName  =   request.body.name;
			    var senderEmail =   request.body.email;
			    var message     =   request.body.message;

			    console.log(senderName);  
			    //console.log(senderEmail);  
			    //console.log(message);
			    var mailOptions = {
			    from: senderName +'<'+senderEmail+'>', // sender address
			    to: 'ag.grandmaster@gmail.com, murali.yellepeddy@gmail.com', // list of receivers
			    subject: 'AppArbor Contact ✔', // Subject line
			    text: message, // plaintext body
			    html: '<b>'+message+'</b>' // html body
					};

				var transporter =	nodemailer.createTransport();
				transporter.sendMail(mailOptions, function(error, info){
				    if(error){
				         response.send('{"status":false,"info":"'+error+'"}');
				    }else{
				         response.send('{"status":true}');
				    }
				});
		} 
		catch (ex) {
				response.send('{"status":false,"info":"'+ex+'"}');
		}
});


app.route('/')
    .get(function(req, res) {
      res.sendfile('index.html');
    });

 //res.sendFile

app.route('/*')
    .get(function(req, res) {
    	//console.log("mountpath-->", req.originalUrl);
    	//console.log(util.inspect(req, false, null));
      res.sendfile("./"+req.originalUrl);
    });


var node_port = process.env.PORT || '8000';
node_port = parseInt(node_port);


app.listen(node_port);

console.log("server initialized");

