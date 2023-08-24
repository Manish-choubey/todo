const mongoose = require("mongoose");

const connectionString = "mongodb+srv://functionup-cohert:yCRgEggIFfjlaB8o@sl0yd7n.mongodb.net/?retryWrites=true&w=majority"
const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true, // for mongoose 6.x
        // useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        console.log("Connected to MongoDB database successfully.");
      })
      .catch((error) => {
        console.log("Error connecting to MongoDB: ", error.message);
      });
  } catch (error) {
    console.log("Database connection error: ", error.message);
  }
};

module.exports = connectDatabase;