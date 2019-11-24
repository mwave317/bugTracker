const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Type = require('../models/Type');
// const Type = mongoose.model('type');


router.get('/', async (req, res) => {
        let types  = await Type.find();
        res.status(200).send(types)  
        });

router.post('/', async (req, res) => {
    try {
        const { type } = req.body;

                const AddType = new Type({
                    type,
                });

                await AddType.save();
                res.status(200).send('Type Added');
    } catch {
        res.status(500).send('Server Error');
    }

});

module.exports = router;