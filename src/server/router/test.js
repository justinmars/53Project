var express = require('express');
var router = express.Router();
var userinfo = require('../model/model');


router.get('/testMongo', function(req, res, next) {
    userinfo.find({},(err,doc)=>{
        if(err){
            res.json({
                status:1,
                msg:err.message
            })
        }
        else {
            console.log(res);
            res.json({
                status:0,
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
});
module.exports = router;

/*router.get('/fileUpload',function(req,res,next){
    res.render('fileUpload');
});

router.get('/articlePress', function(req, res, next) {
    res.render('articlePress');
});*/

