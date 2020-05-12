const express = require('express');
const router = express.Router();

const Centre = require('../../models/Centre');

router.get('/', (req, res) => {
    Centre.find({}, { placeName: 1 })
        .then(centre => res.json(centre));
});

router.post('/', (req, res) => {
    const centre = new Centre({
        placeName: req.body.placeName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
        embeddedUrl: req.body.embeddedUrl,
        courseOffered: req.body.courseOffered
    });
    centre.save()
        .then(centre => res.json(centre));
});

router.get('/place/:placeName', (req, res) => {
    const placeName = req.params.placeName;
    Centre.findOne({ placeName: placeName })
        .then(centre => res.json(centre))
});

router.get('/course/:courseName', (req, res) => {
    const courseName = req.params.courseName;
    Centre.find({ courseOffered: courseName }, { placeName: 1 })
        .then(centre => res.json(centre))
});

module.exports = router;