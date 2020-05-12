const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Courses = mongoose.model('Courses', CourseSchema);