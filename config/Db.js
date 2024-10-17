const mongoose = require("mongoose");
require('dotenv').config()

const Db=()=>{
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected To MongDb");
  })
  .catch((err) => console.log("Error", err));
}
  module.exports=Db;
