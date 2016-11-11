var express = require("express");
var app = express();
var index = require('./routes/index');
var welcome = require('./routes/welcome');
var parts = require('./routes/parts');
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/welcome', parts);

app.use('/parts', parts);

app.use(express.static('lib/public'));

app.get('/', index);

app.listen(port);
console.log("Listening on port: ", port);
