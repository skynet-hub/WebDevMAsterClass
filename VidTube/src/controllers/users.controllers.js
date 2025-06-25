import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js" 
import { User } from "../models/users.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const registerUser = asyncHandler(async (req, res) => {
    //Let us destructure req body to get the required fields
    const {fullname, email, username, password} = req.body

    //Let us do some basic Validation
    if ([fullname, email, username, password].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    } 

    //Handle case the user already exist
    const userExist = await User.findOne({
        $or: [{username}, {email}]
    })

    if (userExist){
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    console.log(req.files)

    if (!avatarLocalPath){
        throw new ApiError(401, "Avatar file is missing")
    }

    // const avatar = await uploadOnCloudinary(avatarLocalPath)
    // let coverImage = ""
    // if (coverImageLocalPath){
    //     coverImage = await uploadOnCloudinary(coverImage)
    // }

    let avatar
    
    try {
        avatar = await uploadOnCloudinary(avatarLocalPath)
        console.log("Avatar uploaded successfully")
    } catch (error) {
        console.log("Error loading avatar", error)
        throw new ApiError(500, "Error uploading avatar")
    }

    let coverImage
    try {
        coverImage = await uploadOnCloudinary(coverImageLocalPath)
        console.log("CoverImage successfully uploaded")
        
    } catch (error) {
        console.log("Error uploading coverImage", error)
        throw new ApiError(500, "Error uploading coberImage")
    }

    console.log(avatar)

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser){
        throw new ApiError(500, "Something went wrong while registering a user")
    }

    return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "User registered successfully"))
})

export {
    registerUser
}