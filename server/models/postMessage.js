import mongoose, { Mongoose } from "mongoose";

// Schema of post Model
const postSchema = mongoose.Schema({

    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Initialise postMessage as a model in MongoDB database
const PostMessage = Mongoose.model('PostMessage', postSchema) ;

export default PostMessage