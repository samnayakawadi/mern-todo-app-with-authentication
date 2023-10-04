import app from "./app.js";
import "./data/database.js"
import { connectDatabase } from "./data/database.js";

app.get("/", (req, res) => {
  res.json({
    appName: "To Do Application using Express & MongoDB",
    appVersion: "0.0.1",
    appAuthor: "Samir Nayakawadi"
  })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log("App started at port :", process.env.SERVER_PORT, "& In",process.env.SERVER_MODE,"Mode")
})

connectDatabase()