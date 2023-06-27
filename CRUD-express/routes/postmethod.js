var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /post/:
 *   post:
 *     summary: Enter the new locations
 *     tags:
 *       - Locations
 *     description: Location details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Location Details
 *         description: Employee location details
 *         in: body
 *         default : '{"city":"Coimbatore","state":"TamilNadu","country":"India"}'
 *         schema:
 *           $ref: '#/definitions/Locations'
 *     responses:
 *       200:
 *         description: Successfully created
 */


router.post('/', function (req, res) {
    let name = req.query.name;
    res.send("hello all")
    res.send(name)
});





module.exports = router;



