const config = require('../config/key');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function admin(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        const id = req.user.id;
        User.findOne({ _id: id })
            .then(response => {
                if (response.role === 1)
                    next();
                else
                    return res.status(400).json({ msg: "Not an admin" })
            })
            .catch(error => {
                res.status(400).json({ msg: "token is not valid" })
            })

    } catch (e) {
        res.satus(400).json({ msg: "token is not valid" });
    }
}

module.exports = admin;