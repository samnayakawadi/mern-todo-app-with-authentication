class CustomError extends Error {
    constructor(statusCode, status, message) {
        super(message)
        this.status = status
        this.statusCode = statusCode
    }
}

const customErrorMiddleware = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500
    err.status = err.status || "INTERNALSERVERERROR"
    err.message = err.message || "Something went wrong"

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}

export { customErrorMiddleware }
export default CustomError