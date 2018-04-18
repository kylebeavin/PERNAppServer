const express = require('express');
const router = express.Router();
const sequelize = require('../db')
const User = sequelize.import('../models/content');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    User.findOne({
        where: {
            content: req.body.user.email
        }
    }).then((user) => {
        if (user) {
            bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                if (matches) {

                    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

                    res.json({
                        user: user,
                        message: "successfully authenticated",
                        sessionToken: token
                    });
                } else {
                    res.status(500).send({ error: "password does not match." })
                }
            });
        } else {
            res.status(500).send({ error: "your email is not in database." });
        } (err) => {
            res.status(500).send({ error: "there was an error with the server." })

        }
    });
});

module.exports = router;