const express = require('express');
const router = express.Router();

const Courses = require('../../models/Courses');

router.get('/', (req, res) => {
    Courses.find({}, { courseName: 1 })
        .then(courses => res.json(courses));
});

router.post('/', (req, res) => {
    const newCourse = new Courses({
        courseName: req.body.courseName,
        fees: req.body.fees,
        description: req.body.description
    });
    newCourse.save()
        .then(course => res.json(course));
});

router.get('/description/:courseName', (req, res) => {
    const courseName = req.params.courseName;
    Courses.findOne({ courseName: courseName }, { description: 1 })
        .then(desc => res.json(desc))
})

router.get('/fees/:courseName', (req, res) => {
    const courseName = req.params.courseName;
    Courses.findOne({ courseName: courseName }, { fees: 1 })
        .then(desc => res.json(desc))
})

module.exports = router;