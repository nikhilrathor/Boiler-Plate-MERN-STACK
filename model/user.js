const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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

userSchema.pre('save', (next) => {
    var user = this;

    if (user.isModified('password')) {
        console.log('hi');
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                console.log('hi2');
                return next(err);
            }

            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) {
                    console.log('hi3');
                    return next(err);
                }

                user.password = hash;
            });
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassword = (plainPassword, cb) => {
    bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = (cb) => {
    let user = this;
    let token = jwt.sign(user._id.toHexString(), 'secret')

    user.token = token;
    user.save((err, user) => {
        if (err) return cb(err)
        cb(null, user);
    })
}

module.exports = User = mongoose.model('User', userSchema);