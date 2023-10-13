import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.js";
import cookieParser from "cookie-parser";
import tasksRouter from "./routes/tasks.js";
import { customErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";

config({
  path: "./data/config.env",
});

const app = express();

// Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL1, process.env.FRONTEND_URL2],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Middlewares (Routers)
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

// Middleware (Error) ~ Needs 4 parameters so, Express will understand
app.use(customErrorMiddleware);

export default app;
