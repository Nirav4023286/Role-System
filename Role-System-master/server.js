var express = require('express');
var app = express();

var logger = require('morgan');
var path = require('path');
var server=require('http').Server(app);
const port=3000;



app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/client')));


server.listen(port,function(req,res){
  console.log(`Server is running on port ${port}...`);
});
