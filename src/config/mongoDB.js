const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_DB = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB);

    console.log("DB connected !!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDB,
};
