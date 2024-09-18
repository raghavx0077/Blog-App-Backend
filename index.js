const express = require("express");
const mongoose = require("mongoose");

const app = express();
const userRoute=require('./routes/userRoutes')


app.use(express.json());


mongoose
  .connect("mongodb://localhost:27017/api")
  .then(() => {
    console.log("Connected To MongDb");
  })
  .catch((err) => console.log("Error", err));

  app.use('/api/users',userRoute)
  
  app.post('/api/userSchema',(req,res)=>
{
    console.log(req.body); 
    res.send(req.body);
})






app.listen(5000, () => {
  console.log("Server is running on port 5000");
});