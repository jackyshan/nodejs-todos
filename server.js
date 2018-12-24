var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var controller = require('./controller.js')
controller(app)

app.listen(3000)

console.log('app listening on port 3000')