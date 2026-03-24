import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is connected successfully");
  } catch (e) {
    console.log(e);
    process.exit(1);
    //setTimeout(dbConnection, 5000);
  }
};

export default dbConnection;
