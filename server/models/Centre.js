const mongoose = require('mongoose');

const CentreSchema = mongoose.Schema({
    placeName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    embeddedUrl: {
        type: String,
        required: true
    },
    courseOffered: {
        type: [String],
        required: true
    }
});

module.exports = Centre = mongoose.model('Centre', CentreSchema);