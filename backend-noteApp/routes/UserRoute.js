import express from "express";
import {
<<<<<<< HEAD
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginHandler,
  logout,
} from "../controllers/AuthController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/create-users", createUser);
router.put("/update-users/:id", updateUser);
router.delete("/delete-users/:id", deleteUser);
router.post("/login", loginHandler);
router.post("/logout", verifyToken, logout);
=======
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
>>>>>>> e2e287c4057f323e1f06d0d76813ee03d2601a8a

export default router;