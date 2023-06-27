var express = require('express');
var router = express.Router();


/**
 * @swagger
 * /get/try:
 *   get:
 *     summary: Get all location
 *     tags:
 *       - Locations
 *     description:  Get all Location Details
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully received all the Location Details.
 */
router.get('/try', async function (req, res) {
    // res.send("express is working good")
    var obj = { "name": "jayaprakash", "age": "44" }
    // var response = await locationModel.find();
    res.send(obj)
});

module.exports = router;

