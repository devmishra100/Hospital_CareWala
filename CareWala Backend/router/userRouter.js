import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
} from "../controllers/userController.js";
import { isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isPatientAuthenticated, logoutUser);
router.get("/me", isPatientAuthenticated, getUserDetails);

export default router;