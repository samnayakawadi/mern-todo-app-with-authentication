import jwt from "jsonwebtoken"
import usersCollection from "../models/users.js"

const authenticateUser = async (req, res, next) => {

    try {
        if (req.cookies.token) {

            // Must throw an exception if token is tampred
            try {
                const tokenData = jwt.verify(req.cookies.token, process.env.JWT_SECRETKEY)
                req.user = await usersCollection.findOne({ _id: tokenData.userid })
                next()
            }
            catch (err) {
                res.status(500).json({
                    status: "INTERNALSERVERERROR",
                    message: "Internal Server Error"
                })
            }

        }
        else {
            res.status(401).json({
                status: "UNAUTHORIZED",
                message: "Token Not Found"
            })
        }
    }
    catch (error) {
        next(error)
    }
}

export { authenticateUser }