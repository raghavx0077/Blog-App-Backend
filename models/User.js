const mongoose=require ('mongoose');

const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:String,
    
    email:{
        type:String,
        required: true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
    },
    designation:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});
module.exports=mongoose.model('User',userSchema)