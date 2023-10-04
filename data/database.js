import mongoose from "mongoose";

let { DB_USERNAME, DB_PASSWORD, DB_CLUSTERNAME, DB_DATABASENAME } = process.env

DB_PASSWORD = encodeURIComponent(DB_PASSWORD)

const mongodbURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTERNAME}/${DB_DATABASENAME}?retryWrites=true&w=majority`

const connectDatabase = () => {
    mongoose.connect(mongodbURI).then(() => {
        console.log("Database Connection Status : Successful")
    }).catch(err => {
        console.log("Database Connection Status : Failed. Error : ", err)
    })
}

export { connectDatabase }