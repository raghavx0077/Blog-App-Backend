const jwt=require("jsonwebtoken")
const UserAuthModel = require("../models/AuthUser");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { UserName, email, password } = req.body;
  try {

    const hashedpassword = await bcrypt.hash(password, 8);
    const newuser =await UserAuthModel({UserName,email,password:hashedpassword})
    await newuser.save()
    console.log(newuser)  ; 

    return res.status(201).send("done")
   

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.loginUser = async (req, res) => {

const {email,password}=req.body
const user= await UserAuthModel.findOne({email:email});

console.log("ExistUser",user);

if(!user){
  return res.status(400).send ("Invalid user or password");
}

const isMatch =await bcrypt.compare(password,user.password);
if(!isMatch) return  res.status(404).send("invalid password")

  const token =jwt.sign({email:user.email},process.env.Secret_key,{expiresIn: '1h'});
  console.log(token)
  return res.status(200).send({token:token})
  console.log("ValidPassword ",isMatch);
}
