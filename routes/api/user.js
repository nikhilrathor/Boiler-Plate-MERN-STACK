const express = require('express');
const User = require('../../model/user');

const router = express.Router();

router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(userData => {
            return res.status(200).json(userData)
        })
        .catch(err => {
            if (err) return res.json({ success: false, err })
        })
});

router.post('/login', (req, res) => {
    User.find({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.json({
                    loginSuccess: false,
                    message: "Auth Failed, Email Not Found"
                });
            }

            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    return res.json({ loginSuccess: false, message: "Wrong Password" })
                }
            })

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('x-auth', user.token)
                    .status(200)
                    .json({
                        loginSuccess: true
                    })
            })
        })
        .catch(err => {

        })
})


module.exports = router;