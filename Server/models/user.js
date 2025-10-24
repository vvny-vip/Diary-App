const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: String,
    Email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
