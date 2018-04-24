const jwt = require('jsonwebtoken');
const sequelize = require('../db');
const User = sequelize.import('../models/user');

module.exports = (req, res, next) => {
    if (req.method == 'OPTIONS') {
        next()
    } else {

        const sessionToken = req.headers.authorization;

        if (!sessionToken) return res.status(403).send({ auth: false, message: 'no token' });
        else {
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
                if (decoded) {
                    User.findOne({ where: { id: decoded.id } }).then(user => {
                        req.user = user;
                        next();
                    },
                        () => {
                            res.status(401).send({ error: 'not authorized' });
                        });
                } else {
                    res.status(400).send({ error: 'not authorized' });
                }
            });
        }
    }
}