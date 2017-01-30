var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
    console.log(req.body);
    res.json({
        message: "Yuhuuuu"
    });
// 	res.status(200).send('This is awesome');
});

module.exports = router;