const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/userDB")

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    imageUrl: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

module.exports = User;