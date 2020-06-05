const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Classes = require('../../models/Classes');
const User = require('../../models/User');


router.post('/', (req, res) => {
    const { day, time, teacherName, courseName, centre } = req.body;

    const classes = new Classes({
        day: day,
        time: time,
        teacherName: teacherName,
        course: {
            'courseName': courseName,
            'centre': centre
        }
    });
    classes.save()
        .then(data => res.json(data));
});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            Classes.find({ course: { $in: user.coursesEnrolled } })
                .then(data => {
                    return res.status(200).json(data);
                })
                .catch(err2 => {
                    return res.status(400).json({ msg: "Something went wrong!" })
                })
        })
        .catch(err1 => {
            return res.status(400).json({ msg: "Something went wrong!" })
        })
});

module.exports = router;