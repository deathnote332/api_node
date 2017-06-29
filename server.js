var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var route = require('./api/routes/web')


//use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

// use morgan to log requests to the console
app.use(morgan('dev'));
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
var port = process.env.PORT || 3000;

app.listen(port)

console.log('connected to port' + port);