const nodemailer = require('nodemailer');
const config = require('../config/key');
const xoauth2 = require('xoauth2');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: config.MAIL_USER,
        clientId: '639021658403-aanbnt567390hfdkdk35hilji38odqqu.apps.googleusercontent.com',
        clientSecret: '5neXov4U4Ap0_fhE0SFLBD5S',
        refreshToken: '1//04UBW_WgQuFvxCgYIARAAGAQSNwF-L9IrEo94bh7J5qPyAxQpCoFiXXkveJ7XFOa_vKyghY72UTjy8lhtKTmPTIF8S0J2Wlww76Q',
        accessToken: 'ya29.a0AfH6SMA8zBe9CQl8lR8VRP4BUvFp2TgM07-7aGJGC2DqwHZyyMOkw9rZp9_sTFYrVQeyBRygfc78c-Shx3Q_bXZThTB-XXLSMGGWoJvDjXfdQq7oUOpkgRPe1frIiBfj6vAPN1Far6rTTZSebytz3mPaqI6MNZ_QAUs'
    }
});

module.exports = {
    sendEmail(from, to, subject, html) {
        return new Promise((resolve, reject) => {
            transport.sendMail({ from, subject, to, html }, (err, info) => {
                if (err) reject(err);
                resolve(info);
            })
        })
    }
}