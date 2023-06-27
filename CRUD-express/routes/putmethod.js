var express = require('express');
var router = express.Router();


/**
 * @swagger
 * /put/:
 *   put:
 *     summary: Edit the location details
 *     tags:
 *       - Locations
 *     description: Update location details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Location Details
 *         description: Update location details
 *         in: body
 *         default : '{"city":"Coimbatore","state":"TamilNadu","country":"India"}'
 *         schema:
 *           $ref: '#/definitions/UpdateLocations'
 *     responses:
 *       200:
 *         description: Successfully created
 */

/**
 * @swagger
 * definitions:
 *   UpdateLocations:
 *     properties:
 *       city:
 *         type: string
 *       state:
 *         type: string
 *       country:
 *         type: string    
 */

router.put('/', function (req, res) {
    let name = req.query.name;
    name = "suryaprakash";
    res.send(name)
});





module.exports = router;



