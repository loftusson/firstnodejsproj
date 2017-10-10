var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('<center><h1>Hello World</h1><br /><br/><h3>This is our first page of our first node.js page </h3></center>');
});
 
var port = Number(process.env.PORT || 5000);
app.listen(port);

console.log("Blah!");
