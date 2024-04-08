import User from "../models/User.mjs";

export const createUser = async (req, res) => {
  try {
    // Extract the new user data from the request body
    const newUserData = req.body;

    // Create a new user document using the provided data
    const newUser = await User.create(newUserData);

    // If the user is created successfully, send it in the response
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Find all users in the users collection
    const users = await User.find({});
    res.status(200).json(users);
  } 
  catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const {userId} = req.params;

    // Find the user by ID in the users collection
    const user = await User.findById(userId);

    // Check if the user with the given ID exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // If the user is found, send it in the response
    res.status(200).json(user);
  } 
  catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUserById = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
     const { userId } = req.params;

    // Extract the updated user data from the request body
    const updatedUserData = req.body;

    // Find the user by ID in the users collection and update it
    const user = await User.findByIdAndUpdate(userId, updatedUserData);

    // Check if the user with the given ID exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // If the user is found and updated successfully, send it in the response
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const { userId } = req.params;

    // Find the user by ID in the users collection and delete it
    const deletedUser = await User.findByIdAndDelete(userId);

    // Check if the user with the given ID exists
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // If the user is found and deleted successfully, send a success message in the response
    res.status(200).json({ message: "User deleted successfully" });
  } 
  catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
