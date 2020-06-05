const mongoose = require('mongoose');

const ClassesSchema = mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    course: {
        courseName: String,
        centre: String
    }
});

module.exports = Classes = mongoose.model('Classes', ClassesSchema);