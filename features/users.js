const sendCookie = (res, status = 200, token, maxAge = 0, statusCode = "OK", message = "User has been logged out") => {
    console.log("Sending Cookie...")
    res.status(status).cookie("token", token, {
        httpOnly: true,
        maxAge: maxAge,
        sameSite: process.env.SERVER_MODE === "DEV" ? "lax" : "none",
        secure: process.env.SERVER_MODE === "DEV" ? false : true
    }).json({
        status: statusCode,
        message: message
    })
}

export { sendCookie }