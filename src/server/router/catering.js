var express = require('express');
var router = express.Router();
var catering = require('../model/catering').Catering;

router.get('/',function (req,res) {
    catering.find({ industry: '餐饮-西餐'},function (err,doc) {
        if(err){
            res.send(500);
            console.log(err);
        }else {
            console.log("数据已找到");
        }

    })
});
module.exports = router;