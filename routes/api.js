var express = require('express');
var rout = express.Router();

// Get Homepage
rout.get('/', function(req, res){
    console.log('Working!');
// 	res.status(200).send('This is awesome');
});

module.exports = rout;