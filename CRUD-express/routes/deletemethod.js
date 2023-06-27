var express = require('express');
var router = express.Router();

router.delete('/', function (req, res) {
    let name = req.query.name;
    name!="jayaprakash"?res.send(name):res.send("sorry its jayaprakash");
    // console.log("delete is working")
});

module.exports = router;



