const express = require('express');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
})

router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(userData => {
            return res.status(200).json({
                success: true
            })
        })
        .catch(err => {
            if (err) return res.json({ success: false, err })
        })
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
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
                res.cookie('x_auth', user.token)
                    .status(200)
                    .json({
                        loginSuccess: true
                    })
            })
        })
})

router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).send({
            success: true
        })
    })
})


module.exports = router;