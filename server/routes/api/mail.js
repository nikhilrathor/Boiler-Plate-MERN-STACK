const express = require('express');
const mailer = require('../../misc/mailer');
const config = require('../../config/key');

const router = express.Router();

router.post('/contact-us', (req, res) => {
    const { name, email, subject, message } = req.body;
    const html = `
                        <h1>EVEREST EDUCOM - CONTACT US</h1>
                        <br /><br />
                        Name: ${name}
                        <br />
                        Email: ${email}
                        <br />
                        Subject: ${subject}
                        <br />
                        Message: ${message}
                        `;
    mailer.sendEmail('admin@EverestEducom.com', email, 'CONTACT US', html)
    mailer.sendEmail('admin@EverestEducom.com', config.MAIL_USER, 'CONTACT US', html);

})

router.post('/quick-enquiry', (req, res) => {
    const { name, email, phoneNumber, city, courseName } = req.body;
    const html = `
                        <h1>EVEREST EDUCOM - QUICK ENQUIRY</h1>
                        <br /><br />
                        Name: ${name}
                        <br />
                        Email: ${email}
                        <br />
                        Phone Number: ${phoneNumber}
                        <br />
                        City: ${city}
                        <br />
                        Course: ${courseName}
                        `;
    mailer.sendEmail('admin@EverestEducom.com', email, 'QUICK ENQUIRY', html);
    mailer.sendEmail('admin@EverestEducom.com', config.MAIL_USER, 'QUICK ENQUIRY', html);

})

router.post('/quick-enquiry', (req, res) => {
    const { name, email, phoneNumber, city, courseName } = req.body;
    const html = `
                        <h1>EVEREST EDUCOM - QUICK ENQUIRY</h1>
                        <br /><br />
                        Name: ${name}
                        <br />
                        Email: ${email}
                        <br />
                        Phone Number: ${phoneNumber}
                        <br />
                        City: ${city}
                        <br />
                        Course: ${courseName}
                        `;
    mailer.sendEmail('admin@EverestEducom.com', email, 'QUICK ENQUIRY', html);
    mailer.sendEmail('admin@EverestEducom.com', config.MAIL_USER, 'QUICK ENQUIRY', html);

})

router.post('/reach-out', (req, res) => {
    const { name, email, phoneNumber, selectedCourse } = req.body;
    const html = `
                        <h1>EVEREST EDUCOM - REACH OUT TO US</h1>
                        <br /><br />
                        Name: ${name}
                        <br />
                        Email: ${email}
                        <br />
                        Phone Number: ${phoneNumber}
                        <br />
                        Course: ${selectedCourse}
                        `;
    mailer.sendEmail('admin@EverestEducom.com', email, 'REACH OUT TO US', html);
    mailer.sendEmail('admin@EverestEducom.com', config.MAIL_USER, 'REACH OUT TO US', html);

})

module.exports = router;