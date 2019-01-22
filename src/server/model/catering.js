var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cateringSchema = new Schema({   //新建实体对象
    //对象中的属性名，这里有多个属性，并且包含嵌套对象，即一个属性指向一个对象。
    _id:  String,
    cname: String,
    industry: String,
    shopnum: Number,
    intentjoin: Number,
    applyjoin: Number,
    investmoney: String,
    introduction: String,
    img: String
});

module.exports.Catering =  mongoose.model('Catering',cateringSchema);