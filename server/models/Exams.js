const mongoose = require('mongoose');

const ExamSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    topicName: {
        type: String,
        required: true
    },
    course: {
        courseName: String,
        centre: String
    }
});

module.exports = Exams = mongoose.model('Exams', ExamSchema);