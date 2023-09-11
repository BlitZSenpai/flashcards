import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGODB_URL!;

const db = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
}

export default db;