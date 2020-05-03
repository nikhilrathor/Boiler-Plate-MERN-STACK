const express = require('express');
const User = require('../../model/user');

const router = express.Router();

router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save()
    .then(userData =>{
        return res.status(200).json(userData)
    })
    .catch(err =>{
        if (err) return res.json({ success: false, err })
    })
})


module.exports = router;