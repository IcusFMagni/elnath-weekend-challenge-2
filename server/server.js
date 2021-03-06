var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;
var calc = require('./routes/calc.js')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(){
    console.log('listening on port:', port)
})

app.use('/calc', calc)

