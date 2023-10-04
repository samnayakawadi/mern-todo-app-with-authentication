import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const usersCollection = mongoose.model("users", usersSchema)

export default usersCollection