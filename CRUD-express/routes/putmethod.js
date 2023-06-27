var express = require('express');
var router = express.Router();




router.put('/', function (req, res) {
    let name = req.query.name;
    name = "suryaprakash";
    res.send(name)
});





module.exports = router;



