import asyncHandler from "express-async-handler";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";

// ================== REGISTER ==================
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password, role } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    res.status(400);
    throw new Error("User already registered with this email");
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
    role: role || "Patient",
  });

  generateToken(user, "User Registered Successfully!", 200, res);
});

// ================== LOGIN ==================
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    res.status(400);
    throw new Error("Please provide email, password and role");
  }

  // password field select:false hai, isliye explicitly +password karna padega
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  if (role !== user.role) {
    res.status(400);
    throw new Error("User with this role not found");
  }

  generateToken(user, "Login Successful!", 200, res);
});

// ================== LOGOUT ==================
export const logoutUser = asyncHandler(async (req, res) => {
  const cookieName = req.user.role === "Admin" ? "adminToken" : "patientToken";

  res
    .status(200)
    .cookie(cookieName, "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

// ================== GET LOGGED-IN USER DETAILS ==================
export const getUserDetails = asyncHandler(async (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    user,
  });
});