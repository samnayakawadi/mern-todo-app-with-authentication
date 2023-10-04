import mongoose from "mongoose"

const tasksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const tasksCollection = mongoose.model("tasks", tasksSchema)

export default tasksCollection