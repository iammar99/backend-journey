const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDB')


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    age: Number
})

const user = mongoose.model('User', userSchema);

module.exports = user;