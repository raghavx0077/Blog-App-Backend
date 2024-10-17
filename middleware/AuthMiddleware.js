const jwt =require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
   
const token=req.header('Authorization');
if(!token) return res.status(401).send("Token is Required")
   console.log(token)
try{
   const decoded =jwt.verify(token,process.env.Secret_key)
   console.log(decoded);
   req.user=decoded.userID;

   next();
}
catch(err){
   return res.status(404).send(err.message)
}
}
module.exports=authMiddleware;