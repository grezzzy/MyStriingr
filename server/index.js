var express = require("express");
var app = express();
var port = 3000;
var db = require("../database");
//app.use(express.static('./client/public'))
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("App is listening to port: " + port);
});
