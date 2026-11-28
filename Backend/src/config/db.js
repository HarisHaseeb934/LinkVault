import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`,
    );
    console.log(`DB connected Successfully: ${dbConnection.connection.name}`);
  } catch (error) {
    console.log(`DB connection failed: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
