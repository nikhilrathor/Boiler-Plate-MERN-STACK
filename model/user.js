const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 25
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minLength: 5
    },
    lastname: {
        type: String,
        maxlength: 25
    },
    role: {
        type: Number,
        default: 0
    },
    tokem: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

module.exports = User = mongoose.model('User', userSchema);