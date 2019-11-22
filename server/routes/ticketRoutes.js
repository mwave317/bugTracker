const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

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