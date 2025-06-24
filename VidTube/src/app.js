import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser";


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Common middleware

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

//import the routes here!
import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/error.middlewares.js";

//Use the routes to serve
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("api/v1/users", userRouter)


app.use(errorHandler)
export { app }