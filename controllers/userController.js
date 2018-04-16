const express = require('express');
const router = express.Router();
const sequelize = require('../db')
const User = sequelize.import('../models/user');

router.post('/', (req,res) => {
    let firstname = req.body.user.firstname;
    let lastname = req.body.user.lastname;
    let email = req.body.user.email;
    let password = req.body.user.password;

    User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    }).then(
        createSuccess = (user) => {
            
        }
    )
});

module.exports = router;