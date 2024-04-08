import { Router } from "express";
const router = Router();
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/userController.mjs";

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get all users
 *     description: get users from users collection
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: users fetched successfully
 *       '400':
 *         description: unable to fetch users
 */

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById);
router.put("/users/:userId", updateUserById);
router.delete("/users/:userId", deleteUserById);
export default router;
