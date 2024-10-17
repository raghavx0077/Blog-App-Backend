const express = require("express");

const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRouter");

const MongoDb = require("./config/Db");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());

MongoDb();

app.use("/api/users",  userRoute);
app.use("/api/AuthUser", authRoute);

app.post("/api/userSchema", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("api/userAuthSchema", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.use(cors());
app.listen(process.env.Port, () => {
  console.log("Server is running on port 5000");
});
