const mongoose = require("mongoose");

let DB_URL = process.env.DB_URL || "mongodb://localhost:27017/myapp";

module.exports = async function connection() {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: true,
      }
    );
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Failed to connect to database: ", error);
  }
};
