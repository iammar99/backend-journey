const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    postText: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const postModel = mongoose.model("Post", postSchema)

module.exports = postModel