var express = require('express');
var router = express.Router();
router.post('/addDept', async function (req, res, next) {
    var value = req.body;
    console.log(value.department);
    let newDept = new deptModel({
        departmentname: value.department

    });
    await newDept.save(newDept);
    // var response = await deptModel.find();
    res.send(value);
});
module.exports = router;