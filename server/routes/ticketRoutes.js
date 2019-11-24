const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ticket = require('../models/Ticket');
const User = mongoose.model('user');


router.get('/developers', async (req, res) => {
        let developers  = await User.find({}, {firstName : 1, lastName: 1})
        res.status(200).send(developers)  
        });

router.post('/add', async (req, res) => {
    try {
        const { summary, type, reporter, description, labels, linkedIssues, assignee, epic, sprint, comment } = req.body;

                const AddTicket = new Ticket({
                    summary,
                    type,
                    reporter,
                    description,
                    labels,
                    linkedIssues,
                    assignee,
                    epic,
                    sprint,
                    comment,
                });

                await AddTicket.save();
                res.status(200).send('Ticket Created');
    } catch {
        res.status(500).send('Server Error');
    }

});

module.exports = router;