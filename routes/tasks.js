import express from "express"
import { addNewTask, deleteTask, getAllTasks, updateTask } from "../controllers/tasks.js"
import { authenticateUser } from "../middlewares/auth.js"

const tasksRouter = express.Router()

tasksRouter.post("/create", authenticateUser, addNewTask)
tasksRouter.get("/all", authenticateUser, getAllTasks)
tasksRouter.put("/update", authenticateUser, updateTask)
tasksRouter.delete("/delete", authenticateUser, deleteTask)

export default tasksRouter