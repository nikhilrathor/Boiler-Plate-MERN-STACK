const express = require('express');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const randomstring = require('randomstring');
const mailer = require('../../misc/mailer');

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

router.post('/temp-register', (req, res) => {

    const { email } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: "Email Id Already Registered!" })

            else {
                const tempPassword = randomstring.generate();

                const user = new User(req.body,
                );
                user.status = "temp";
                user.tempPassword = tempPassword;
                var isodate = new Date;
                //isodate.setHours(isodate.getHours() - 4);
                user.temp = isodate;

                    user.save()
                        .then(user => {
                            const html = `
                        <h1>WELCOME TO EVEREST EDUCOM</h1>
                        <br /><br />
                        Hi there,
                        <br />
                        Your Temporary Account has been created,
                        it will be deleted after 1 hour if no successfull enrollment occur.
                        <br /><br />
                        Temporary Password: <b>${user.tempPassword}</b>
                        <br />
                        Use this password and proceed to checkout.
                        <br /><br />
                        Have a pleasent Day!`;
                            mailer.sendEmail('admin@EverestEducom.com', user.email, 'Temporary Account', html);
                            return res.status(200).json({
                                msg: "Security Token send to your Mail"
                            })
                        })
                        .catch(err => {
                            if (err) return res.status(400).json({ success: false, err })
                        })
            }
        })
        .catch(err => {
            return res.status(400).json({ msg: "Internal Error" })
        })
});

router.delete('/', (req, res) => {
    var isodate1 = new Date();
    isodate1.setHours(isodate1.getHours() - 1);
    User.deleteMany({
        $and: [
            {
                'temp': {
                    $lt: isodate1
                }
            },
            {
                'status': 'temp'
            }
        ]
    })
        .then(user => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
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