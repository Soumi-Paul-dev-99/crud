const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(
      `Connection successfully ${conn.connection.host}`.bgMagenta.underline
    );
  } catch (error) {
    console.log(`database not connected ${error.message}`.bgRed);
  }
};

module.exports = connectDB;
