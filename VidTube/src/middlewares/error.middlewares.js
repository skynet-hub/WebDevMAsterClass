import mongoose, { MongooseError } from "mongoose";
import { ApiError } from "../utils/ApiError.js";

   function errorHandler(err, req, res, next) {
     const statusCode = err.statusCode || err instanceof MongooseError ? 400 : 500
     const message = err.message || "Something went wrong";

     err = new ApiError(statusCode, message, err?.errors || [], err.stack)

     const response = {
        ...err,
        message: err.message,
        ...(process.env.NODE_ENV === "development" ? {stack: err.stack} : {})
     } 

    return res.status(err.statusCode).json(response)
   }

export {errorHandler}   