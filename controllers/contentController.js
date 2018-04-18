const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Content = sequelize.import('../models/content');

router.post('/', (req, res) => {
    let subject = req.body.content.subject;
    let notes = req.body.content.notes;
    let reference = req.body.content.notes;

    Content.create({
        subject: subject,
        notes: notes,
        reference: reference
    })
        .then(createSuccess = (content) => {
            res.json({
                content: content,
                message: 'created',
            });
        },
            createError = (err) => {
                res.send(500, err.message);
            })
})
module.exports = router;