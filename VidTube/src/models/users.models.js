import mongoose, { Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, //Cloudinary URL
        required: true
    },
    coverImage: {
        type: String //Cloudinary URL
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String, //Complex but will be covered later
        required: [true, "Password is required"]
    },
    refreshTokens: {
        type: String
    }
},
{timestamps: true}
)

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)    

    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.AccessTokenGenerator = function() {
   return jwt.sign(
    {_id: this._id}, 
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_EXPIRY
   )
}

userSchema.methods.RefreshTokenGenerator = function() {
    jwt.sign(
        {_id: this._id},
        process.env.REFRESH_TOKEN,
        process.env.REFRESH_TOKEN_EXPIRY
    )
}

export const User = mongoose.model("User", userSchema)

