/*
var express = require('express');
var router = express.Router();
var userinfo = require('../model/model');


router.route('/testMongo', function(req, res, next) {
    userinfo.find({},(err,doc)=>{
        if(err){
            res.json({
                status:1,
                msg:err.message
            })
        }
        else {
            console.log(res)
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


/!*router.get('/fileUpload',function(req,res,next){
    res.render('fileUpload');
});

router.get('/articlePress', function(req, res, next) {
    res.render('articlePress');
});*!/



module.exports = router;*/
/*var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var catering = require('../model/catering').Catering;

router.get('/',function (req,res) {
    /!*catering.findOne({cname:'ABC'},function (err,doc) {
        if (err){
            res.send(500);
            console.log(err);
        }else if(doc){
            res.send(500);
            console.log("test已存在");
        }else {
            var test = new catering({cname:'ABC'});
            test.save(function (err,doc) {
                if(err){
                    console.log('test存入失败');
                }else {
                    console.log('test存入成功');
                }
            });
        }
    });*!/
    catering.find({ industry: '餐饮-西餐'},function (err,doc) {
        if(err){
            res.send(500);
            console.log(err);
        }else {
            console.log("数据已找到");
        }

    })
});
module.exports = router;*/
