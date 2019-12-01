const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ticket = require('../models/Ticket');
const User = mongoose.model('user');
const verify = require('./verifyToken');
const cors = require('cors');

router.get('/developers', async (req, res) => {
        let developers  = await User.find({}, {firstName : 1, lastName: 1})
        res.status(200).send(developers)  
        });

router.post('/add', cors(),  verify, async (req, res) => {
    try {
        const { summary, addType, reporter, description, labels, linkedIssues, assignee, epic, sprint, comment } = req.body;
        console.log(addType);

                const AddTicket = new Ticket({
                    summary,
                    addType,
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