const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Content = sequelize.import('../models/content');

router.post('/', (req, res) => {
    let subject = req.body.content.subject;
    let notes = req.body.content.notes;
    let reference = req.body.content.reference;
    let user = req.user;

    Content.create({
        subject: subject,
        notes: notes,
        reference: reference,
        owner: user.id
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

router.get('/', (req, res) => {
    let userid = req.user.id;

    Content.findAll({ where: { owner: userid } })
        .then(
            findAllSuccess = (data) => {
                res.json(data);
            },
            findAllError = (err) => {
                res.send(500, err.message);
            }
        );
});

router.delete('/:id', (req, res) => {
    let contentId = req.body.content.id;

    Content.destroy({ where: { id: contentId } }).then(
        deleteSuccess = (data) => {
            res.json(data);
        },
        deleteError = (err) => {
            res.send(500, err.message);
        }
    )
})

router.put('/:id', (req, res) => {
    let data = req.params.id;
    let subject = req.body.content.subject;
    let notes = req.body.content.notes;
    let reference = req.body.content.reference;

    Content.update({
        subject: req.body.content.subject,
        notes: req.body.content.notes,
        reference: req.body.content.reference
    },
        { where: { id: data } }
    ).then(
        updateSuccess = (updatedContent) => {
            res.json({
                subject: subject,
                notes: notes,
                reference: reference
            });
        },
        updateError = (err) => {
            res.send(500, err.message);
        }
    )
});

module.exports = router;