const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/testUserDB")

const user = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }]
})

module.exports = mongoose.model("User", user)