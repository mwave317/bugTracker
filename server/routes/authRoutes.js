const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    try  {

    const { firstName, lastName, email, username } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        firstName,
        lastName,
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password: hashedPassword,
    });

    await user.save();
    res.status(200).send(user);

    } catch {
        res.status(500).send('Server Error');
    }
    
});

module.exports = router;