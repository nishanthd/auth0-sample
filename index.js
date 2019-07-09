var express = require('express');
var app = express();
var jwt = require('express-jwt');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
    secret: '22bj2YDUq4HVhwslaAKjUsjhfXmkTQEr',
    audience: 'http://00daf37c.ngrok.io',
    issuer: 'https://nishanthd.auth0.com/'
  });

// enforce on all endpoints
app.use(jwtCheck);

app.get('/cars', function (req, res) {
    res.send(['1','2']);
});

app.listen(port);

console.log('Running on port ', port);
