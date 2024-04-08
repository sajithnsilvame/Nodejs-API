import { connect } from "mongoose";
import { config } from "dotenv";
config();

const mongoURI = process.env.DB;

const connectDB = async () => {
  try {
    await connect(mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
