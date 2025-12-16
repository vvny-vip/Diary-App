const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: { type: String },
    Email: { type: String, required: true, unique: true },
    password: { type: String }
});

const entrySchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    date: { type: Date, default: Date.now },
    mood: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

const User = mongoose.model('User', userSchema);
const Entry = mongoose.model('Entry', entrySchema);

module.exports = { User, Entry };
