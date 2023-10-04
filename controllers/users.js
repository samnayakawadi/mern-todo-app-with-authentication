import jwt from "jsonwebtoken"
import usersCollection from "../models/users.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../features/users.js"
import CustomError from "../middlewares/error.js"

const registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        const existingUsername = await usersCollection.findOne({ username })
        const existingEmail = await usersCollection.findOne({ email })

        if (existingUsername) {
            next(new CustomError(409, "CONFLICT", "Username already exists"))
        }
        else if (existingEmail) {
            next(new CustomError(409, "CONFLICT", "Email already exists"))
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10)

            let newUser = await usersCollection.create({
                username,
                email,
                password: hashedPassword
            })

            res.status(201).json({
                status: "CREATED",
                message: "User added successfully",
                data: newUser
            })
        }
    }
    catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body

        const existingUser = await usersCollection.findOne({ username }).select("+password")

        if (existingUser) {
            const isMatched = await bcrypt.compare(password, existingUser.password)

            if (isMatched) {

                const tokenData = { userid: existingUser._id }
                const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY)
                sendCookie(res, 200, token, 1000 * 60 * 15, "OK", "User Authenticated Successfully")

            }
            else {
                next(new CustomError(401, "UNAUTHORIZED", "Incorrect Username or Password"))
            }
        }
        else {
            next(new CustomError(401, "UNAUTHORIZED", "Incorrect Username or Password"))
        }
    }
    catch (error) {
        next(error)
    }
}

const logoutUser = (req, res) => {

    sendCookie(res, 200, null, 0, "OK", "User has been logged out")

}

const getUserDetails = (req, res) => {

    res.status(200).json({
        status: "OK",
        message: "User details fetched",
        data: req.user
    })
}

export { registerUser, loginUser, logoutUser, getUserDetails }