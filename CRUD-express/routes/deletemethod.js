var express = require('express');
var router = express.Router();
/**
 * @swagger
 * /delete/:
 *   delete:
 *     summary: Delete Location
 *     tags:
 *       - Locations
 *     description: Delete Location 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Delete location
 *         description: Delete location details
 *         in: body
 *         default : '{"city":"Coimbatore","state":"TamilNadu","country":"India"}'
 *         schema:
 *           $ref: '#/definitions/DeleteLocations'
 *     responses:
 *       200:
 *         description: Successfully created
 */

/**
 * @swagger
 * definitions:
 *   DeleteLocations:
 *     properties:
 *       city:
 *         type: string
 *       state:
 *         type: string
 *       country:
 *         type: string    
 */



router.delete('/', function (req, res) {
    let name = req.query.name;
    name!="jayaprakash"?res.send(name):res.send("sorry its jayaprakash");
    // console.log("delete is working")
});

module.exports = router;



