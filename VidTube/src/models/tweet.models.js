import mongoose, {Schema} from "mongoose";

const tweetSchema = Schema({
     content: {
        type: String,
        require: true
     },
     owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
     }
}, {
    timestamp: true
})

export const Tweet = mongoose.model("Tweet", tweetSchema)