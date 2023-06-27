var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
res.send("express is working good")
});


module.exports=router;



