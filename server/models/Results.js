const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    achieverName: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = Result = mongoose.model('Result', ResultSchema);