const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const colors = require("colors");
const User = require("./models/userModel");
const userRoutes = require("./router/userRoute");

connectDB();

//middlewares
app.use(express.json());
app.use("/api/user", userRoutes);




app.get("/test", (req, res) => {
  res.status(200).json("get api called");
});
app.listen(port, () => {
  console.log(
    `server running on the port http://localhost:${port}`.yellow.underline
  );
});
