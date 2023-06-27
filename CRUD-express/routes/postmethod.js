var express = require('express');
var router = express.Router();




router.post('/', function (req, res) {
    let name = req.query.name;
    res.send(name)
});





module.exports = router;



