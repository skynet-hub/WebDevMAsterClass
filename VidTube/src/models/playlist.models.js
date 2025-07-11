import mongoose, {Schema} from "mongoose";

const playlistSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: true,
        required: true
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{timestamp: true}
)

export const Playlist = mongoose.model("Playlist", playlistSchema)
