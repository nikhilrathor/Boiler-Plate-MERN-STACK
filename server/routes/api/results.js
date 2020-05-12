const express = require('express');
const router = express.Router();

const Results = require('../../models/Results');

router.get('/', (req, res) => {
    Results.find({})
        .then(results => res.json(results));
});

router.post('/', (req, res) => {
    const newResult = new Result({
        courseName: req.body.courseName,
        achieverName: req.body.achieverName,
        rank: req.body.rank,
        image: req.body.image
    });
    newResult.save()
        .then(results => res.json(results));
});

router.get('/:courseName', (req, res) => {
    const courseName = req.params.courseName;
    Results.find({ courseName: courseName })
        .then(results => res.json(results))
})

module.exports = router;