import CustomError from "../middlewares/error.js"
import tasksCollection from "../models/tasks.js"

const addNewTask = async (req, res, next) => {

    try {
        const { title, description } = req.body

        const newTask = await tasksCollection.create({
            title,
            description,
            user: req.user._id
        })

        res.status(200).json({
            status: "CREATED",
            message: "New task created",
            data: newTask
        })
    } catch (error) {
        next(error)
    }

}

const getAllTasks = async (req, res, next) => {

    try {
        const tasks = await tasksCollection.find({ user: req.user })

        res.status(200).json({
            status: "OK",
            message: "Fetched all the tasks",
            data: tasks
        })
    }
    catch (error) {
        next(error)
    }

}

const updateTask = async (req, res, next) => {

    try {

        const { taskid } = req.query

        const existingTask = await tasksCollection.findOne({ _id: taskid })

        if (existingTask) {
            existingTask.isComplete = !existingTask.isComplete
            const updatedTask = await existingTask.save()

            res.status(200).json({
                status: "OK",
                message: "Task updated successfully",
                data: updatedTask
            })
        }
        else {
            next(new CustomError(404, "NOTFOUND", "Task not found"))
        }
    } catch (error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const { taskid } = req.query

        const existingTask = await tasksCollection.findOne({ _id: taskid })

        if (existingTask) {
            const deletedTask = await existingTask.deleteOne()

            res.status(200).json({
                status: "OK",
                message: "Task deleted successfully",
                data: deletedTask
            })
        }
        else {
            next(new CustomError(404, "NOTFOUND", "Task not found"))
        }
    }
    catch (error) {
        next(error)
    }
}

export { addNewTask, getAllTasks, updateTask, deleteTask }