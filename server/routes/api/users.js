const express = require('express');
const User = require('../../models/User');
const Centre = require('../../models/Centre');
const auth = require('../../middleware/auth');
const randomstring = require('randomstring');
const mailer = require('../../misc/mailer');
const config = require('../../config/key');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/temp-register', (req, res) => {

    const { name, email, phoneNumber, address } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: "Email Id Already Registered!" })

            else {
                const tempPassword = randomstring.generate();

                const user = new User({ name, email, phoneNumber, address });
                //user.coursesEnrolled.push(course);
                user.status = config.TEMP;
                user.password = tempPassword;
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
                        Temporary Password: <b>${tempPassword}</b>
                        <br />
                        Use this password and proceed to checkout.
                        <br /><br />
                        Have a pleasent Day!`;
                        mailer.sendEmail('admin@EverestEducom.com', user.email, 'Temporary Account', html);
                        return res.status(200).json({
                            msg: "Temporary Password for sent to your Mail"
                        })
                    })
                    .catch(err => {
                        if (err) return res.status(400).json({ msg: "Something went wrong!" })
                    })
            }
        })
        .catch(err => {
            return res.status(400).json({ msg: "Internal Error" })
        })
});

router.post('/verify-user', (req, res) => {
    const { email, password, course } = req.body;
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ msg: "Email Not Found!" })
            }
            else {
                if (user.status === config.TEMP) {
                    user.comparePassword(password, (err, isMatch) => {
                        if (!isMatch) {
                            return res.status(400).json({ msg: "Wrong Password" })
                        }
                        else
                            return res.status(200).json(user.email);
                    })
                }
                else {
                    user.comparePassword(password, (err, isMatch) => {
                        if (!isMatch) {
                            return res.status(400).json({ msg: "Wrong Password" })
                        }
                        else {
                            User.findOne({
                                $and: [
                                    {
                                        "email": email
                                    },
                                    {
                                        "coursesEnrolled.courseName": course
                                    }
                                ]
                            })
                                .then(user1 => {
                                    if (user1) {
                                        return res.status(400).json({ msg: "You are already enrolled in this course!" })
                                    }
                                    else {
                                        return res.status(200).json(user.email);
                                    }
                                })
                                .catch(err => {
                                    return res.status(400).json({ msg: "Internal Error1" })
                                })
                        }
                    })
                }
            }
        })
        .catch(err => {
            return res.status(400).json({ msg: "Internal Error" })
        })
})

router.post('/final-register', (req, res) => {

    let { email, selectedCourse, selectedCentre, data } = req.body;
    if (selectedCentre === 'Select a Centre') {
        Centre.findOne({ courseOffered: selectedCourse.trim() }, { placeName: 1 }).sort({ placeName: 'descending' })
            .then(res => (
                selectedCentre = res.placeName
            ))
    }
    User.findOne({ 'email': email })
        .then(user => {
            if (user) {
                const course = {
                    'courseName': selectedCourse,
                    'centre': selectedCentre
                }
                user.coursesEnrolled.push(course);
                user.status = config.PERMANENT;

                user.save()
                    .then(user => {
                        const html = `
                            <h1>WELCOME TO EVEREST EDUCOM</h1>
                            <br /><br />
                            Hi there,
                            <br />
                            Thanks for enrolling in ${selectedCourse}
                            <br /><br />
                            Payment Details:
                            PAYER ID: ${data.payerID}
                            <br />
                            PAYMENT ID: ${data.paymentID}
                            <br />
                            PAYMENT TOKEN: ${data.paymentToken}
                            <br / ><br />
                            Now you can anytime use your password to login.
                            Change Password option is available under user dashboard.
                            <br /><br />
                            Have a pleasent Day!`;
                        mailer.sendEmail('admin@EverestEducom.com', user.email, 'Course Enrolled', html);
                        return res.status(200).json({
                            msg: "Payment Invoice send to mail"
                        })
                    })
                    .catch(err => {
                        if (err) return res.status(400).json({ msg: "Something went wrong!" })
                    })
            }
            else {
                return res.status(400).json({ msg: "Internal Error1" })
            }
        })
        .catch(err => {
            return res.status(400).json({ msg: "Internal Error" })
        })
});

router.post('/login', (req, res) => {
    var a = false, b = false;
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User Does Not exist" });

            user.comparePassword(password, (err, isMatch) => {
                if (!isMatch) {
                    return res.status(400).json({ msg: "Invalid Credentials" })
                }
                else {
                    console.log(config.USER)
                    console.log(config.ADMIN)
                    jwt.sign(
                        { id: user.id },
                        config.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;

                            if (user.role === config.USER)
                                a = true;
                            if (user.role === config.ADMIN)
                                b = true;
                            res.json({
                                token,
                                user:
                                {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                },
                                loggedInUser: a,
                                loggedInAdmin: b
                            });
                        })
                }
            })
        })
});

router.get('/user', auth, (req, res) => {
    var a = false, b = false;
    User.findById(req.user.id)
        .select('-password')
        .then(user => {
            if (user.role === config.USER)
                a = true;
            if (user.role === config.ADMIN)
                b = true;
            res.json({
                user,
                loggedInUser: a,
                loggedInAdmin: b
            })
        });
});

router.post('/changePassword', auth, (req, res) => {
    const { oldPassword, newPassword } = req.body;
    User.findById(req.user.id)
        .then(user => {
            if (!user) return res.status(400).json({ msg: "Something went wrong!" });

            user.comparePassword(oldPassword, (err, isMatch) => {
                if (!isMatch) {
                    return res.status(400).json({ msg: "Invalid Credentials" })
                }
                else {
                    user.password = newPassword;
                    user.save()
                        .then(data => {
                            res.status(200).json({ msg: "Password changed successfully!" })
                        })
                        .catch(err => {
                            return res.status(401).json({ msg: "Something went wrong!" });
                        })
                }
            })
        })
        .catch(err => {
            return res.status(401).json({ msg: "Something went wrong!" });
        })
})

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

/*
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
}) */


module.exports = router;