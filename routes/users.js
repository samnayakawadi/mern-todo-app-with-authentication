import express from "express";
import { getUserDetails, loginUser, logoutUser, registerUser } from "../controllers/users.js";
import { authenticateUser } from "../middlewares/auth.js";

const usersRouter = express.Router()

usersRouter.post("/register", registerUser)
usersRouter.post("/login", loginUser)
usersRouter.get("/logout", authenticateUser, logoutUser)
usersRouter.get("/profile", authenticateUser, getUserDetails)

export default usersRouter