const mongoose = require('mongoose')
const userAuthSchema = new mongoose.Schema({
    UserName:{
      type:  String,
      required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
    

});
module.exports=mongoose.model('AuthUSer',userAuthSchema);

