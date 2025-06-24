/*
 subscriber ObjectID users
  channel ObjectID users
  createdAt Date
  updateAt Date
*/

import mongoose, {Schema} from "mongoose";

const subscriberSchema = Schema({

    //Subscriber ID
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
},
{timestamp: true}
) 


export const Subscriber = mongoose.model("Subscriber", subscriberSchema)