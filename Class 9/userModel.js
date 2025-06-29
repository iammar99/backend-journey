const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/database_name')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model('User', userSchema);

module.exports = User;