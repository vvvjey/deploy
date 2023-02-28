var blogModel = require('../models/BlogModel');
var {mongooseToObject,mongooToObject} = require('../util/mongoose')
class homeController{
    home(req,res){
        // blogModel.find({})
        // .then(a=>{
        //     res.render('home',{a:mongooseToObject(a)})
        // })

        res.render('home')
    }
}
module.exports=new homeController;
