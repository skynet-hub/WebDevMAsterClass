//Establishing connection with the database
import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../constants.js";

dotenv.config({
    path: "./src/.env"
})

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
        console.log(` \n  MangoDB connected! DB host: `, connectionInstance.connection.host)
    } catch (error) {
        console.log("Error connecting to MangoDB ", error);
        process.exit(1)
    }
}

export default connectDB