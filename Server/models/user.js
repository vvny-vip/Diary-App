const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: String,
    Email: String,
    password: String
});
const entry = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    mood: String
});

const User = mongoose.model('User', userSchema);
const Entry = mongoose.model('Entry', entry);
module.exports = {User,Entry};
