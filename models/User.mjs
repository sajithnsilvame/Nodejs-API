import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gpa: Number,
});

// Define User Model
const User = mongoose.model("User", userSchema);
export default User;
