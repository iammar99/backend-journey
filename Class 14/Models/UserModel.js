const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
    age: Number,
    posts: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel