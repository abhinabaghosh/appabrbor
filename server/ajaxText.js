var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

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
      res.send(200).end;
    }
    else {
      next();
    }
};


 
app.use(allowCrossDomain);



app.post('/sendMail', function(request, response){

  

    var senderName  =   request.body.name;
    var senderEmail =   request.body.email;
    var message     =   request.body.message;

    console.log(senderName);  
    console.log(senderEmail);  
    console.log(message);

    response.send("done");


      // your JSON
  //response.send(request.body);    // echo the result back

});


app.listen(8000);

console.log("server initialized");